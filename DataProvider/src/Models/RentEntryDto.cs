using Amazon.DynamoDBv2.DataModel;

namespace DataProvider.Models
{
    [DynamoDBTable("RentEntries")]
    public class RentEntryDto
    {
        /// <summary>
        /// [Partition key] The URL of the rent entry on its website
        /// </summary>
        [DynamoDBHashKey]
        public required string Url { get; set; }

        /// <summary>
        /// [Sort key] Unix timestamp on which the rent entry was posted
        /// </summary>
        [DynamoDBRangeKey(StoreAsEpoch = true)]
        public required DateTime DateTimePosted { get; set; }

        /// <summary>
        /// [TTL] Unix timestamp that defines when the entry must be deleted
        /// </summary>
        [DynamoDBProperty(StoreAsEpoch = true)]
        public required DateTime Ttl { get; set; }

        /// <summary>
        /// Post title or short description
        /// </summary>
        [DynamoDBProperty]
        public required string Title { get; set; }

        /// <summary>
        /// The numeric price of the apartment rent per month
        /// </summary>
        [DynamoDBProperty]
        public required double Price { get; set; }

        /// <summary>
        /// The currency in which the price is specified
        /// </summary>
        [DynamoDBProperty]
        public required string Currency { get; set; }

        /// <summary>
        /// The type of building (e.g. apartments, townhouse, etc.)
        /// </summary>
        [DynamoDBProperty]
        public string? BuildingType { get; set; }

        /// <summary>
        /// Whether the building is modern or not
        /// </summary>
        [DynamoDBProperty]
        public bool? IsBuildingModern { get; set; }

        /// <summary>
        /// The floor number on which the apartment is located
        /// </summary>
        [DynamoDBProperty]
        public int? FloorNumber { get; set; }

        /// <summary>
        /// The amount of rooms in the apartment
        /// </summary>
        [DynamoDBProperty]
        public int? RoomsAmount { get; set; }

        /// <summary>
        /// The area of the apartment in square meters
        /// </summary>
        [DynamoDBProperty]
        public double? ApartmentAreaInSqMeters { get; set; }

        /// <summary>
        /// The country in which the apartment is located
        /// </summary>
        [DynamoDBProperty]
        public required string Country { get; set; }

        /// <summary>
        /// The city in which the apartment is located
        /// </summary>
        [DynamoDBProperty]
        public required string City { get; set; }

        /// <summary>
        /// The area of the city in which the apartment is located
        /// </summary>
        [DynamoDBProperty]
        public string? CityArea { get; set; }

        /// <summary>
        /// The address of the apartment (not incl. what other fields provide)
        /// </summary>
        [DynamoDBProperty]
        public required string Address { get; set; }
    }
}
