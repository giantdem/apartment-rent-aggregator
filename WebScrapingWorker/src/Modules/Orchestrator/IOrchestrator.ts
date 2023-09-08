export interface IOrchestrator
{
    executeRentDataPipeline(): Promise<void>;
}
