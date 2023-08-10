import { IDataGenerationStrategy, DataGenerationStrategyRegistry } from '../IDataGenerationStrategy.js';
import { RentEntry } from '../../../Models/RentEntry.js';
import { faker } from '@faker-js/faker';

@DataGenerationStrategyRegistry.registerImplementation
export class RandomDataGenerationStrategy implements IDataGenerationStrategy
{
    getRentEntries(): RentEntry[]
    {
        const rentEntries: RentEntry[] = [];

        for (let i = 0; i < 10; i++)
        {
            const rentEntry = new RentEntry();
            rentEntry.currency = faker.finance.currencyCode();
            rentEntry.buildingType = faker.helpers.arrayElement(['Apartment', 'Townhouse', 'Condo']);
            rentEntry.country = faker.location.country();
            rentEntry.city = faker.location.city();
            rentEntry.cityArea = faker.location.county();
            rentEntry.address = faker.location.streetAddress();
            rentEntry.url = `https://example.com/rent/${faker.string.nanoid()}`;
            rentEntry.dateTimePosted = faker.date.recent();
            rentEntry.price = faker.number.int({ min: 1000, max: 5000 });
            rentEntry.isBuildingModern = faker.datatype.boolean();
            rentEntry.floorNumber = faker.number.int({ min: 1, max: 5 });
            rentEntry.roomsAmount = faker.number.int({ min: 1, max: 5 });
            rentEntry.apartmentAreaInSqMeters = faker.number.int({ min: 30, max: 200 });
            rentEntry.title = `${rentEntry.roomsAmount} ${rentEntry.roomsAmount > 1 ? 'rooms' : 'room'} ` +
                `${rentEntry.buildingType} for ${rentEntry.price} ${rentEntry.currency} ` +
                `(${rentEntry.city} - ${rentEntry.country})`;

            rentEntries.push(rentEntry);
        }

        return rentEntries;
    }
}
