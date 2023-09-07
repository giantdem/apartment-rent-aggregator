import { RentEntry } from '../../Models/RentEntry.js';

export interface IMessagePublishing
{
    publish(rentEntries: RentEntry[]): Promise<void>;
}
