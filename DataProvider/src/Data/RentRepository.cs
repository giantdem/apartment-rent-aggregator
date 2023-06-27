namespace DataProvider.Data
{
    public class RentRepository : IRentRepository
    {
        private readonly ILogger<RentRepository> _logger;

        public RentRepository(ILogger<RentRepository> logger)
        {
            _logger = logger;
        }
    }
}
