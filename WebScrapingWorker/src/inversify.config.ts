import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types.js";
import { IDataGeneration, IMessagePublishing, IOrchestrator } from "./interfaces.js";
import { DataGeneration, MessagePublishing, Orchestrator } from "./entities.js";
import { Connection, Publisher } from 'rabbitmq-client';

const container = new Container();

registerMessaging();
container.bind<IDataGeneration>(TYPES.IDataGeneration).to(DataGeneration).inSingletonScope();
container.bind<IMessagePublishing>(TYPES.IMessagePublishing).to(MessagePublishing).inSingletonScope();
container.bind<IOrchestrator>(TYPES.IOrchestrator).to(Orchestrator).inSingletonScope();

function registerMessaging()
{
    const client = new Connection('amqp://guest:guest@localhost');
    client.on('error', (err) => { console.error('RabbitMQ connection error.', err); });
    client.on('connection', () => { console.log('Connection successfully (re)established.'); });

    const pub = client.createPublisher({
        confirm: true,
        maxAttempts: 2,
        exchanges: [{ exchange: 'RentEntries', passive: true }]
    });

    container.bind<Publisher>(TYPES.Publisher).toConstantValue(pub);

    function onShutdown()
    {
        pub.close()
            .then(() => client.close())
            .catch((err) => console.error(err));
        console.log('Messaging connection is closed.');
    }
    process.on('SIGINT', onShutdown);
    process.on('SIGTERM', onShutdown);
}

export { container };
