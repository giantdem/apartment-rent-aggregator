import { IDataGenerationStrategy, dataGenerationStrategyRegistry } from '../IDataGenerationStrategy.js';
import { RentEntry } from '../../../Models/RentEntry.js';

@dataGenerationStrategyRegistry.registerImplementation
export class WebScrapingStrategy implements IDataGenerationStrategy
{
    public getRentEntries(): RentEntry[]
    {
        console.warn(`${this.constructor.name}.${this.getRentEntries.name}() is not implemented yet.`);
        return [];
    }
}
