import { container, exitApplication } from "./inversify.config.js";
import { IDataGeneration, IOrchestrator } from "./interfaces.js";
import { TYPES } from "./types.js";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2), {
    alias: { "s": "dataGenerationStrategy" }
});
const dataGenerationStrategy = argv["dataGenerationStrategy"] as string;
if (dataGenerationStrategy)
{
    const dataGeneration = container.get<IDataGeneration>(TYPES.IDataGeneration);
    dataGeneration.setStrategy(dataGenerationStrategy);
    console.log('Data generation strategy set: %s', dataGenerationStrategy);
}
else
{
    console.info("No data generation strategy specified. Defaulted to the random strategy.");
}

const orchestrator = container.get<IOrchestrator>(TYPES.IOrchestrator);
await orchestrator.executeRentDataPipeline();

await exitApplication();
