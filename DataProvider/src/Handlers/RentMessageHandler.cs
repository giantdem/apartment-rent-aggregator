using DataProvider.Models;
using DataProvider.Services;
using MassTransit;

namespace DataProvider.Handlers
{
    public class RentMessageHandler : IConsumer<Batch<RentEntry>>
    {
        private readonly ILogger<RentMessageHandler> _logger;
        private IRentService _rentService;

        public RentMessageHandler(ILogger<RentMessageHandler> logger, IRentService rentService)
        {
            _logger = logger;
            _rentService = rentService;
        }

        public Task Consume(ConsumeContext<Batch<RentEntry>> context)
        {
            return Task.CompletedTask;
        }
    }
}
