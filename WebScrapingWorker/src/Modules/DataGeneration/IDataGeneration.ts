import { RentEntry } from '../../Models/RentEntry.js';

export interface IDataGeneration
{
    getRentEntries(): RentEntry[];
}
