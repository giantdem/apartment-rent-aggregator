import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types.js";
import { IDataGeneration, IMessagePublishing, IOrchestrator } from "./interfaces.js";
import { DataGeneration, MessagePublishing, Orchestrator } from "./entities.js";

const container = new Container();

// XXX: define messaging with the RentEntries queue (and amqp://guest:guest@localhost?)

container.bind<IDataGeneration>(TYPES.IDataGeneration).to(DataGeneration).inSingletonScope();
container.bind<IMessagePublishing>(TYPES.IMessagePublishing).to(MessagePublishing).inSingletonScope();
container.bind<IOrchestrator>(TYPES.IOrchestrator).to(Orchestrator).inSingletonScope();

export { container };
