import { Container } from "inversify";
import { TYPES } from "./types.js";
import { IDataGeneration, IMessagePublishing, IOrchestrator } from "./interfaces.js";
import { DataGeneration, MessagePublishing, Orchestrator } from "./entities.js";

const container = new Container();
container.bind<IDataGeneration>(TYPES.IDataGeneration).to(DataGeneration);
container.bind<IMessagePublishing>(TYPES.IMessagePublishing).to(MessagePublishing);
container.bind<IOrchestrator>(TYPES.IOrchestrator).to(Orchestrator);

export { container };
