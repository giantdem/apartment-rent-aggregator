import { injectable, inject } from "inversify";
import { TYPES } from "../../types.js";
import { IDataGeneration,  IMessagePublishing, IOrchestrator } from '../../interfaces.js';

@injectable()
export class Orchestrator implements IOrchestrator
{
    private _dataGeneration: IDataGeneration;
    private _messagePublishing: IMessagePublishing;

    constructor(@inject(TYPES.IDataGeneration) dataGeneration: IDataGeneration,
        @inject(TYPES.IMessagePublishing) messagePublishing: IMessagePublishing)
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
