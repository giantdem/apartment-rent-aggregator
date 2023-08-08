import { IDataGeneration } from './IDataGeneration.js';

// XXX: well, do we actually need this? Or let IDataGeneration have setStrategy()? Or even make these independent?
export type IDataGenerationStrategy = IDataGeneration;

export class DataGenerationStrategyRegistry
{
    private static implementations: (new () => IDataGenerationStrategy)[] = [];

    public static registerImplementation<T extends new () => IDataGenerationStrategy>(
        ctor: T, _context: ClassDecoratorContext
    )
    {
        this.implementations.push(ctor);
        return ctor;
    }

    public static getImplementations()
    {
        return this.implementations.slice();
    }

    public static getImplementationByName(name: string)
    {
        return this.implementations.find(implementation => implementation.name === name);
    }
}
