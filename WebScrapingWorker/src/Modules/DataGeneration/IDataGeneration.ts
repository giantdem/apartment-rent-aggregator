import { RentEntry } from '../../Models/RentEntry.js';
import { IDataGenerationStrategy } from './IDataGenerationStrategy.js';

export interface IDataGeneration
{
    setStrategy(strategy: string | IDataGenerationStrategy): void;
    getRentEntries(): RentEntry[];
}
