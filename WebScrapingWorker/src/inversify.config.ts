import { Container } from "inversify";
import { TYPES } from "./types.js";
import { IDataGeneration, IMessagePublishing, IOrchestrator } from "./interfaces.js";
import { DataGeneration, MessagePublishing, Orchestrator } from "./entities.js";
import busCore from '@node-ts/bus-core';
import busRabbitMq from '@node-ts/bus-rabbitmq';

const container = new Container();
container.bind<IDataGeneration>(TYPES.IDataGeneration).to(DataGeneration).inSingletonScope();
container.bind<IMessagePublishing>(TYPES.IMessagePublishing).to(MessagePublishing).inSingletonScope();
container.bind<IOrchestrator>(TYPES.IOrchestrator).to(Orchestrator).inSingletonScope();

await busCore.Bus.configure()
    .withTransport(new busRabbitMq.RabbitMqTransport({
        queueName: 'RentEntries',
        connectionString: 'amqp://guest:guest@localhost',
        maxRetries: 5
    }))
    .withContainer({
        get <T>(type: busCore.ClassConstructor<T>)
        {
            return container.get<T>(type);
        }
    })
    .initialize();

export { container };
