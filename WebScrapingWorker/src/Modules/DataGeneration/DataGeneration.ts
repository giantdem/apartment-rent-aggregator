import { injectable } from 'inversify';
import { IDataGeneration } from './IDataGeneration.js';
import { IDataGenerationStrategy, dataGenerationStrategyRegistry } from './IDataGenerationStrategy.js';

@injectable()
export class DataGeneration implements IDataGeneration
{
    private _strategy!: IDataGenerationStrategy;

    constructor(strategy: string | IDataGenerationStrategy = "RandomDataGenerationStrategy") { this.setStrategy(strategy); }

    setStrategy(strategy: string | IDataGenerationStrategy)
    {
        this._strategy = typeof strategy === 'string' ?
            new (dataGenerationStrategyRegistry.getImplementationByName(strategy)) : strategy;
    }

    getRentEntries = () => this._strategy.getRentEntries();
}
