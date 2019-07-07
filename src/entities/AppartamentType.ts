import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from '../core/orm/BaseEntity';
import {Building} from './Building';

@Entity()
export class AppartamentType extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => Building, building => building.appartamentTypes)
    building: Building;
    @Column({nullable: true})
    literName: string;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    roomsCount: number;
    @Column("double precision")
    minArea: number;
    @Column("double precision")
    maxArea: number;
    @Column({nullable: true})
    minPrice: number;
    @Column({nullable: true})
    maxPrice: number;
    @Column({nullable: true})
    floors: string;
    @Column({nullable: true})
    deadlineYear: number;
    @Column({nullable: true})
    deadlineQuarter: number;
    @Column({nullable: true})
    aptCount: number;
    @Column({nullable: true})
    aptFree: number;
    @Column({nullable: true})
    image: string;
    @Column("double precision")
    costM2: number;

    static fromJson(json: any) {
        const o = new AppartamentType();
        o.id = json.id;
        o.literName = json.liter_name;
        o.name = json.apt_type_name;
        o.roomsCount = json.rooms;
        o.minArea = json.min_area;
        o.maxArea = json.max_area;
        o.minPrice = json.min_price;
        o.maxPrice = json.max_price;
        o.floors = json.floors;
        o.deadlineYear = json.deadline_year;
        o.deadlineQuarter = json.deadline_quarter;
        o.aptCount = json.apt_count;
        o.aptFree = json.apt_free;
        o.image = json.img;
        o.costM2 = json.cost_m2;
        return o;
    }
}
