import { RentEntry } from '../../Models/RentEntry.js';

export interface IMessagePublishing
{
    // XXX: is the type right?
    publish(rentEntries: RentEntry[]): void;
}
