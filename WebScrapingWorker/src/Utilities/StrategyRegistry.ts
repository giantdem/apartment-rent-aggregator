export abstract class StrategyRegistry<T>
{
    protected implementations: (new () => T)[] = [];

    public registerImplementation = <U extends new () => T>(
        constructor: U
    ) => { this.implementations.push(constructor); };

    public getImplementations = () => this.implementations.slice();

    public getImplementationByName(name: string)
    {
        const strategy = this.implementations.find(implementation => implementation.name === name);
        if (!strategy) throw new StrategyNotFoundError(name);
        return strategy;
    }
}

class StrategyNotFoundError extends Error
{
    constructor(strategyName: string, options: ErrorOptions = {})
    {
        const message = `Strategy with name '${strategyName}' not found`;

        super(message, options);

        this.name = this.constructor.name;
        Error.captureStackTrace?.(this, this.constructor);
    }
}
