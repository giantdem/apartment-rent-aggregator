using DataProvider.Models;

namespace DataProvider.Services
{
    public interface IRentService
    {
        Task PushRentEntriesToDatabase(IEnumerable<RentEntry> rentEntries);
    }
}
