import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {BaseEntity} from '../core/orm/BaseEntity';

export abstract class Review extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable: true})
    name: string;
    @Column({nullable: true})
    avatar: string;
    @Column({nullable: true})
    text: string;
    @Column({nullable: true})
    publisDate: Date;
    @Column()
    rating: number;
    @Column()
    type: number;
}
