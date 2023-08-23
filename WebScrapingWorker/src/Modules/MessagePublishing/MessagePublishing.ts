import { injectable } from 'inversify';
import { BusInstance } from '@node-ts/bus-core';
import { IMessagePublishing } from './IMessagePublishing.js';
import { RentEntry } from '../../Models/RentEntry.js';

@injectable()
export class MessagePublishing implements IMessagePublishing
{
    private _bus: BusInstance;

    constructor(bus: BusInstance) { this._bus = bus; }

    async publish(rentEntries: RentEntry[])
    {
        for (const rentEntry of rentEntries)
            await this._bus.publish(rentEntry);
    }
}
