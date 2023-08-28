import { IDataGeneration,  IMessagePublishing, IOrchestrator } from '../../interfaces.js';

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
