export class RentEntry
{
    Url!: string;
    DateTimePosted!: Date;
    Title!: string;
    Price!: number;
    Currency!: string;
    BuildingType?: string;
    IsBuildingModern?: boolean;
    FloorNumber?: number;
    RoomsAmount?: number;
    ApartmentAreaInSqMeters?: number;
    Country!: string;
    City!: string;
    CityArea?: string;
    Address!: string;
}
