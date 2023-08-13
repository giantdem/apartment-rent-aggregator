import { RentEntry } from '../../Models/RentEntry.js';

export interface IDataGenerationStrategy
{
    getRentEntries(): RentEntry[];
}

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
