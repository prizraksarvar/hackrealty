import {AppartamentType} from '../../entities/AppartamentType';
import {Building} from '../../entities/Building';

export class BuildingShort {
    id: number;
    appartamentTypes: AppartamentType[];
    name: string;
    deadlineYear: number;
    deadlineQuarter: number;
    address: string;
    deadline: string;
    countryId: number;
    cityId: number;
    type: number;
    material: number; // Кирпич и тп
    developer: string;
    retailAddress: string;
    retailPhone: string;
    website: string;
    facing: string; // Облицовка чистовая, получистовая
    mortgage: string; // Ипотека
    developerContacts: string;
    dutyOfficerContact: string;
    description: string;
    cityAreasId: number;
    latitude: number;
    longitude: number;
    image: string;
    cityArea: string;
    city: string;

    static fromDBEntity(building: Building) {
        var o = new BuildingShort();
        throw Error("Not implemented");
        return 0;
    }
}