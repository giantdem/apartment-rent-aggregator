import { container } from "./inversify.config.js";
import { IDataGeneration, IOrchestrator } from "./interfaces.js";
import { TYPES } from "./types.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2), {
    alias: { "s": "dataGenerationStrategy" },
    default: { "dataGenerationStrategy": "random" }
});
const dataGeneration = container.get<IDataGeneration>(TYPES.IDataGeneration);
dataGeneration.setStrategy(argv['dataGenerationStrategy'] as string);

const orchestrator = container.get<IOrchestrator>(TYPES.IOrchestrator);
orchestrator.executeRentDataPipeline();
