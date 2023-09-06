export class RentEntry
{
    url!: string;
    dateTimePosted!: Date;
    title!: string;
    price!: number;
    currency!: string;
    buildingType?: string;
    isBuildingModern?: boolean;
    floorNumber?: number;
    roomsAmount?: number;
    apartmentAreaInSqMeters?: number;
    country!: string;
    city!: string;
    cityArea?: string;
    address!: string;
}
