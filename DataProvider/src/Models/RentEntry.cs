namespace DataProvider.Models
{
    public class RentEntry
    {
        public required string Url { get; set; }

        public required DateTime DateTimePosted { get; set; }

        public required string Title { get; set; }

        public required double Price { get; set; }

        public required string Currency { get; set; }

        public string? BuildingType { get; set; }

        public bool? IsBuildingModern { get; set; }

        public int? FloorNumber { get; set; }

        public int? RoomsAmount { get; set; }

        public double? ApartmentAreaInSqMeters { get; set; }

        public required string Country { get; set; }

        public required string City { get; set; }

        public string? CityArea { get; set; }

        public required string Address { get; set; }
    }
}
