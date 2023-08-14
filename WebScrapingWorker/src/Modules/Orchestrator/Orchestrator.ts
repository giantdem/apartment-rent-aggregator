import { IOrchestrator } from './IOrchestrator.js';
import { IDataGeneration } from '../DataGeneration/IDataGeneration.js';
import { IMessagePublishing } from '../MessagePublishing/IMessagePublishing.js';

export class Orchestrator implements IOrchestrator
{
    private _dataGeneration: IDataGeneration;
    private _messagePublishing: IMessagePublishing;

    constructor(dataGeneration: IDataGeneration, messagePublishing: IMessagePublishing)
    {
        this._dataGeneration = dataGeneration;
        this._messagePublishing = messagePublishing;
    }

    executeRentDataPipeline()
    {
        const rentEntries = this._dataGeneration.getRentEntries();
        this._messagePublishing.publish(rentEntries);
    }
}
