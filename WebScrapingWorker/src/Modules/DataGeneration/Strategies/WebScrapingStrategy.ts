import { IDataGenerationStrategy, DataGenerationStrategyRegistry } from '../IDataGenerationStrategy.js';
import { RentEntry } from '../../../Models/RentEntry.js';

@DataGenerationStrategyRegistry.registerImplementation
export class WebScrapingStrategy implements IDataGenerationStrategy
{
    public getRentEntries(): RentEntry[]
    {
        console.warn(`${this.constructor.name}.${this.getRentEntries.name}() is not implemented yet.`);
        return [];
    }
}
