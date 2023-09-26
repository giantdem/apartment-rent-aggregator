import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types.js";
import { IDataGeneration, IMessagePublishing, IOrchestrator } from "./interfaces.js";
import { DataGeneration, MessagePublishing, Orchestrator } from "./entities.js";
import { Connection, Publisher } from 'rabbitmq-client';

const container = new Container();

const client = new Connection('amqp://guest:guest@rabbitmq');
client.on('error', (err) => { console.error('RabbitMQ connection error.', err); });
client.on('connection', () => { console.log('Connection successfully (re)established.'); });
const pub = client.createPublisher({
    confirm: true,
    maxAttempts: 2,
    exchanges: [{ exchange: 'RentEntries', passive: true }]
});

container.bind<Publisher>(TYPES.Publisher).toConstantValue(pub);
container.bind<IDataGeneration>(TYPES.IDataGeneration).to(DataGeneration).inSingletonScope();
container.bind<IMessagePublishing>(TYPES.IMessagePublishing).to(MessagePublishing).inSingletonScope();
container.bind<IOrchestrator>(TYPES.IOrchestrator).to(Orchestrator).inSingletonScope();

async function onShutdown()
{
    try
    {
        await pub.close();
        await client.close();
        console.log('Messaging connection is closed.');
    }
    catch (err) { console.error(err); }
}
export async function exitApplication()
{
    await onShutdown();
    process.exit(0);
}
process.on('SIGINT', () => void onShutdown());
process.on('SIGTERM', () => void onShutdown());

export { container };
