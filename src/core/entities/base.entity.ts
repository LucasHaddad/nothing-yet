import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Base extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    createdAt: string;

    @Column()
    createdBy: string;

    @UpdateDateColumn()
    updatedAt: string;

    @Column()
    updatedBy: string;
    
    @DeleteDateColumn({ nullable: true })
    deletedAt?: string;

    @Column({ nullable: true })
    deletedBy?: string;

    @Column({ default: true, nullable: true })
    isActive: boolean;
}