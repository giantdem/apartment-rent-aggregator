using DataProvider.Models;
using DataProvider.Services;
using MassTransit;
using System.Text.Json;

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
            var rentMessages = context.Message.Select(x => x.Message);
            var serializedMessages = JsonSerializer.Serialize(rentMessages, new JsonSerializerOptions { WriteIndented = true });
            _logger.LogDebug("Rent messages received: {Messages}", serializedMessages);
            
            return Task.CompletedTask;
        }
    }
}
