import { injectable, inject } from 'inversify';
import { TYPES } from "../../types.js";
import { IMessagePublishing } from './IMessagePublishing.js';
import { RentEntry } from '../../Models/RentEntry.js';
import { Publisher } from 'rabbitmq-client';

@injectable()
export class MessagePublishing implements IMessagePublishing
{
    constructor(@inject(TYPES.Publisher) private _pub: Publisher) {}

    async publish(rentEntries: RentEntry[])
    {
        for (const rentEntry of rentEntries)
            await this._pub.send("RentEntries", rentEntry);
    }
}
