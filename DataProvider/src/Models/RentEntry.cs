namespace DataProvider.Models
{
    public class RentEntry
    {
        /// <summary>
        /// The URL of the rent entry on its website
        /// </summary>
        public required string Url { get; set; }

        /// <summary>
        /// The date and time on which the rent entry was posted
        /// </summary>
        public required DateTime DateTimePosted { get; set; }

        /// <summary>
        /// Post title or short description
        /// </summary>
        public required string Title { get; set; }

        /// <summary>
        /// The numeric price of the apartment rent per month
        /// </summary>
        public required double Price { get; set; }

        /// <summary>
        /// The currency in which the price is specified
        /// </summary>
        public required string Currency { get; set; }

        /// <summary>
        /// The type of building (e.g. apartments, townhouse, etc.)
        /// </summary>
        public string? BuildingType { get; set; }

        /// <summary>
        /// Whether the building is modern or not
        /// </summary>
        public bool? IsBuildingModern { get; set; }

        /// <summary>
        /// The floor number on which the apartment is located
        /// </summary>
        public int? FloorNumber { get; set; }

        /// <summary>
        /// The amount of rooms in the apartment
        /// </summary>
        public int? RoomsAmount { get; set; }

        /// <summary>
        /// The area of the apartment in square meters
        /// </summary>
        public double? ApartmentAreaInSqMeters { get; set; }

        /// <summary>
        /// The country in which the apartment is located
        /// </summary>
        public required string Country { get; set; }

        /// <summary>
        /// The city in which the apartment is located
        /// </summary>
        public required string City { get; set; }

        /// <summary>
        /// The area of the city in which the apartment is located
        /// </summary>
        public string? CityArea { get; set; }

        /// <summary>
        /// The address of the apartment (not incl. what other fields provide)
        /// </summary>
        public required string Address { get; set; }
    }
}
