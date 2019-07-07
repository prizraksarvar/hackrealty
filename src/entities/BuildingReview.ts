import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from '../core/orm/BaseEntity';
import {Review} from './Review';
import {Building} from './Building';

@Entity()
export class BuildingReview extends Review {
    // @ManyToOne(type => Building, building => building.buildingReviews)
    // building: Building;
}
