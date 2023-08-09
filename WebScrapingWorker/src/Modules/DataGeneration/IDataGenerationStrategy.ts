import { IDataGeneration } from './IDataGeneration.js';

// XXX: well, do we actually need this? Or let IDataGeneration have setStrategy()? Or even make these independent?
export type IDataGenerationStrategy = IDataGeneration;

export class DataGenerationStrategyRegistry
{
    private static implementations: (new () => IDataGenerationStrategy)[] = [];

    public static registerImplementation = <T extends new () => IDataGenerationStrategy>(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        constructor: T, context: ClassDecoratorContext
    ) => {this.implementations.push(constructor);};

    public static getImplementations = () => this.implementations.slice();

    public static getImplementationByName = (name: string) =>
        this.implementations.find(implementation => implementation.name === name);
}
