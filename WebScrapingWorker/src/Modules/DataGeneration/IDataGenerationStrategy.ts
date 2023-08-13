import { RentEntry } from '../../Models/RentEntry.js';

export interface IDataGenerationStrategy
{
    getRentEntries(): RentEntry[];
}

export class DataGenerationStrategyRegistry
{ // XXX: create an abstract class? extract it to a separate file?
    private static implementations: (new () => IDataGenerationStrategy)[] = [];

    public static registerImplementation = <T extends new () => IDataGenerationStrategy>(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        constructor: T, context: ClassDecoratorContext
    ) => {this.implementations.push(constructor);};

    public static getImplementations = () => this.implementations.slice();

    public static getImplementationByName(name: string)
    {
        const strategy = this.implementations.find(implementation => implementation.name === name);
        if (!strategy) throw new StrategyNotFoundError(name);
        return strategy;
    }
}

export class StrategyNotFoundError extends Error
{
    constructor(strategyName: string, options: ErrorOptions = {})
    {
        const message = `Strategy with name '${strategyName}' not found`;

        super(message, options);

        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
