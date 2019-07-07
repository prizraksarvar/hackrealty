import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from '../core/orm/BaseEntity';
import {Review} from './Review';
import {Building} from './Building';

@Entity()
export class RealtorReview extends Review {
    // @ManyToOne(type => Building, building => building.realtorReviews)
    // building: Building;
}
