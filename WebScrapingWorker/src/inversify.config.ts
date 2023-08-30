import { Container } from "inversify";
import { TYPES } from "./types.js";
import { IDataGeneration, IMessagePublishing, IOrchestrator } from "./interfaces.js";
import { DataGeneration, MessagePublishing, Orchestrator } from "./entities.js";
import { Bus, BusInstance } from '@node-ts/bus-core';
import { RabbitMqTransport, RabbitMqTransportConfiguration } from '@node-ts/bus-rabbitmq';

const container = new Container();
container.bind<IDataGeneration>(TYPES.IDataGeneration).to(DataGeneration);
container.bind<IMessagePublishing>(TYPES.IMessagePublishing).to(MessagePublishing);
container.bind<IOrchestrator>(TYPES.IOrchestrator).to(Orchestrator);

const rabbitConfiguration: RabbitMqTransportConfiguration = {
    queueName: 'RentEntries',
    connectionString: 'amqp://guest:guest@localhost',
    maxRetries: 5
};
const rabbitMqTransport = new RabbitMqTransport(rabbitConfiguration);
container.bind<BusInstance>(BusInstance).toConstantValue(
    await Bus.configure().withTransport(rabbitMqTransport).initialize());

export { container };
