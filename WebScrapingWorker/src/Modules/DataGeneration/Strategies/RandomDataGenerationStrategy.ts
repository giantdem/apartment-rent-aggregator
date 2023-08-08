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
            rentEntry.BuildingType = faker.helpers.arrayElement(['Apartment', 'Townhouse', 'Condo']);
            rentEntry.Country = faker.location.country();
            rentEntry.City = faker.location.city();
            rentEntry.CityArea = faker.location.county();
            rentEntry.Address = faker.location.streetAddress();
            rentEntry.Url = `https://example.com/rent/${faker.string.nanoid()}`;
            rentEntry.DateTimePosted = faker.date.recent();
            rentEntry.Price = faker.number.int({ min: 1000, max: 5000 });
            rentEntry.IsBuildingModern = faker.datatype.boolean();
            rentEntry.FloorNumber = faker.number.int({ min: 1, max: 5 });
            rentEntry.RoomsAmount = faker.number.int({ min: 1, max: 5 });
            rentEntry.ApartmentAreaInSqMeters = faker.number.int({ min: 30, max: 200 });
            rentEntry.Title = `${rentEntry.Country} - ${rentEntry.City}: ${rentEntry.RoomsAmount} rooms ${rentEntry.BuildingType} for ${rentEntry.Price} ${rentEntry.Currency}`;

            rentEntries.push(rentEntry);
        }

        return rentEntries;
    }
}
