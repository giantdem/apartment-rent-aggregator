import { injectable, inject } from 'inversify';
import { BusInstance } from '@node-ts/bus-core';
import { IMessagePublishing } from './IMessagePublishing.js';
import { RentEntry } from '../../Models/RentEntry.js';

@injectable()
export class MessagePublishing implements IMessagePublishing
{
    constructor(@inject(BusInstance) private _bus: BusInstance) {}

    async publish(rentEntries: RentEntry[])
    {
        for (const rentEntry of rentEntries)
            await this._bus.publish(rentEntry);
    }
}
