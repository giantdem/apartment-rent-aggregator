using DataProvider.Data;
using DataProvider.Models;

namespace DataProvider.Services
{
    public class RentService : IRentService
    {
        private readonly ILogger _logger;
        private readonly IRentRepository _rentRepository;

        public RentService(ILogger logger, IRentRepository rentRepository)
        {
            _logger = logger;
            _rentRepository = rentRepository;
        }

        public Task PushRentEntriesToDatabase(IEnumerable<RentEntry> rentEntries)
        {
            throw new NotImplementedException();
        }
    }
}
