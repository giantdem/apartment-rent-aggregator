import { injectable, inject } from "inversify";
import { TYPES } from "../../types.js";
import { IDataGeneration,  IMessagePublishing, IOrchestrator } from '../../interfaces.js';

@injectable()
export class Orchestrator implements IOrchestrator
{
    constructor(@inject(TYPES.IDataGeneration) private _dataGeneration: IDataGeneration,
        @inject(TYPES.IMessagePublishing) private _messagePublishing: IMessagePublishing) {}

    async executeRentDataPipeline()
    {
        const rentEntries = this._dataGeneration.getRentEntries();
        await this._messagePublishing.publish(rentEntries);
    }
}
