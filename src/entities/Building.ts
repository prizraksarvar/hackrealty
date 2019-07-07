import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from '../core/orm/BaseEntity';
import {AppartamentType} from './AppartamentType';
import {BuildingReview} from './BuildingReview';
import {RealtorReview} from './RealtorReview';

@Entity()
export class Building extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @OneToMany(type => AppartamentType, appartamentType => appartamentType.building)
    appartamentTypes: AppartamentType[];
    // @OneToMany(type => BuildingReview, buildingReview => buildingReview.building)
    // buildingReviews: BuildingReview[];
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    deadlineYear: number;
    @Column({nullable: true})
    deadlineQuarter: number;
    @Column({nullable: true})
    address: string;
    @Column({nullable: true})
    deadline: string;
    @Column({nullable: true})
    countryId: number;
    @Column({nullable: true})
    cityId: number;
    @Column({nullable: true})
    type: number;
    @Column({nullable: true})
    material: number; // Кирпич и тп
    @Column({nullable: true})
    developer: string;
    @Column({nullable: true})
    retailAddress: string;
    @Column({nullable: true})
    retailPhone: string;
    @Column({nullable: true})
    website: string;
    @Column({nullable: true})
    facing: string; // Облицовка чистовая, получистовая
    @Column({nullable: true})
    mortgage: string; // Ипотека
    @Column({nullable: true})
    developerContacts: string;
    @Column({nullable: true})
    dutyOfficerContact: string;
    @Column({nullable: true})
    description: string;
    @Column({nullable: true})
    cityAreasId: number;
    @Column("double precision")
    latitude: number;
    @Column("double precision")
    longitude: number;
    @Column({nullable: true})
    image: string;
    @Column({nullable: true})
    cityArea: string;
    @Column({nullable: true})
    city: string;

    static fromJson(json: any) {
        const o = new Building();
        o.id = json.id;
        o.name = json.name;
        o.deadlineYear = json.deadline_year;
        o.deadlineQuarter = json.deadline_quarter;
        o.address = json.deadline_quarter;
        o.deadline = json.deadline;
        o.countryId = json.country_id;
        o.cityId = json.city_id;
        o.type = json.newb_type;
        o.material = json.material;
        o.developer = json.developer;
        o.retailAddress = json.retail_address;
        o.retailPhone = json.retail_phone;
        o.website = json.website;
        o.facing = json.facing;
        o.mortgage = json.mortgage;
        o.developerContacts = json.developer_contacts;
        o.dutyOfficerContact = json.duty_officer_contact;
        o.description = json.text;
        o.cityAreasId = json.city_areas_id;
        o.image = json.img;
        o.cityArea = json.city_area;
        o.city = json.city;

        const coords = json.coords.split(",");
        o.latitude = coords[0];
        o.longitude = coords[1];

        return o;
    }
}
