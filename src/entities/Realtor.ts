import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from '../core/orm/BaseEntity';
import {RealtorReview} from './RealtorReview';

@Entity()
export class Realtor extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    // @OneToMany(type => RealtorReview, realtorReview => realtorReview.building)
    // realtorReviews: RealtorReview[];
}
