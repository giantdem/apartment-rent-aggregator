import { RentEntry } from '../../Models/RentEntry.js';
import { StrategyRegistry } from '../../Utilities/StrategyRegistry.js';

export interface IDataGenerationStrategy
{
    getRentEntries(): RentEntry[];
}

class DataGenerationStrategyRegistry extends StrategyRegistry<IDataGenerationStrategy> {}
export const dataGenerationStrategyRegistry = new DataGenerationStrategyRegistry();
