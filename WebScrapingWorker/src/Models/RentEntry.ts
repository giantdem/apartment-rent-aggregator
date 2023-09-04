// XXX: define message model
export class RentEntry implements Event
{
    private _url!: string;
    private _dateTimePosted!: Date;
    private _title!: string;
    private _price!: number;
    private _currency!: string;
    private _buildingType?: string;
    private _isBuildingModern?: boolean;
    private _floorNumber?: number;
    private _roomsAmount?: number;
    private _apartmentAreaInSqMeters?: number;
    private _country!: string;
    private _city!: string;
    private _cityArea?: string;
    private _address!: string;

    public get url() { return this._url; }
    public set url(value: string) { this._url = value; }

    public get dateTimePosted() { return this._dateTimePosted; }
    public set dateTimePosted(value: Date) { this._dateTimePosted = value; }

    public get title() { return this._title; }
    public set title(value: string) { this._title = value; }

    public get price() { return this._price; }
    public set price(value: number) { this._price = value; }

    public get currency() { return this._currency; }
    public set currency(value: string) { this._currency = value; }

    public get buildingType() { return this._buildingType; }
    public set buildingType(value: string | undefined) { this._buildingType = value; }

    public get isBuildingModern() { return this._isBuildingModern; }
    public set isBuildingModern(value: boolean | undefined) { this._isBuildingModern = value; }

    public get floorNumber() { return this._floorNumber; }
    public set floorNumber(value: number | undefined) { this._floorNumber = value; }

    public get roomsAmount() { return this._roomsAmount; }
    public set roomsAmount(value: number | undefined) { this._roomsAmount = value; }

    public get apartmentAreaInSqMeters() { return this._apartmentAreaInSqMeters; }
    public set apartmentAreaInSqMeters(value: number | undefined) { this._apartmentAreaInSqMeters = value; }

    public get country() { return this._country; }
    public set country(value: string) { this._country = value; }

    public get city() { return this._city; }
    public set city(value: string) { this._city = value; }

    public get cityArea() { return this._cityArea; }
    public set cityArea(value: string | undefined) { this._cityArea = value; }

    public get address() { return this._address; }
    public set address(value: string) { this._address = value; }
}
