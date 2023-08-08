import { faker } from '@faker-js/faker';
import { IDataGenerationStrategy, DataGenerationStrategyRegistry } from '../IDataGenerationStrategy.js';
import { RentEntry } from '../../../Models/RentEntry.js';

@DataGenerationStrategyRegistry.registerImplementation
export class RandomDataGenerationStrategy implements IDataGenerationStrategy
{
    getRentEntries(): RentEntry[]
    {
        const rentEntries: RentEntry[] = [];

        for (let i = 0; i < 10; i++)
        {
            const rentEntry = new RentEntry();
            rentEntry.Currency = faker.finance.currencyCode();
            rentEntry.BuildingType = faker.random.arrayElement(['Apartment', 'Townhouse', 'Condo']);
            rentEntry.Country = faker.address.country();
            rentEntry.City = faker.address.city();
            rentEntry.CityArea = faker.address.county();
            rentEntry.Address = faker.address.streetAddress();
            rentEntry.Url = `https://example.com/rent/${faker.string.nanoid()}`;
            rentEntry.DateTimePosted = faker.date.recent();
            rentEntry.Price = faker.random.number({ min: 1000, max: 5000 });
            rentEntry.IsBuildingModern = faker.random.boolean();
            rentEntry.FloorNumber = faker.random.number({ min: 1, max: 50 });
            rentEntry.RoomsAmount = faker.random.number({ min: 1, max: 5 });
            rentEntry.ApartmentAreaInSqMeters = faker.random.number({ min: 30, max: 200 });
            rentEntry.Title = `${rentEntry.Country} - ${rentEntry.City}: ${rentEntry.RoomsAmount} rooms ${rentEntry.BuildingType} for ${rentEntry.Price} ${rentEntry.Currency}`;

            rentEntries.push(rentEntry);
        }

        return rentEntries;
    }
}
