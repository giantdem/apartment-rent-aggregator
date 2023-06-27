using DataProvider.Models;
using DataProvider.Services;
using MassTransit;

namespace DataProvider.Handlers
{
    public class RentMessageHandler : IConsumer<RentEntry>
    {
        private readonly ILogger<RentMessageHandler> _logger;
        private IRentService _rentService;

        public RentMessageHandler(ILogger<RentMessageHandler> logger, IRentService rentService)
        {
            _logger = logger;
            _rentService = rentService;
        }

        public Task Consume(ConsumeContext<RentEntry> context)
        {
            throw new NotImplementedException();
        }
    }
}
