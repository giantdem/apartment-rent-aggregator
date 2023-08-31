import { container } from "./inversify.config.js";
import { IDataGeneration, IOrchestrator } from "./interfaces.js";
import { TYPES } from "./types.js";

const dataGeneration = container.get<IDataGeneration>(TYPES.IDataGeneration);
dataGeneration.setStrategy('WebScrapingStrategy');

const orchestrator = container.get<IOrchestrator>(TYPES.IOrchestrator);
orchestrator.executeRentDataPipeline();
