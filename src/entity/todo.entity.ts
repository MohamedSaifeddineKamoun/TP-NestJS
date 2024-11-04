import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('todo')
export class TodoEntity {
@PrimaryGeneratedColumn()
id: number;
@Column({length:50, unique: true})
name: string;
@Column()
description: string;
@CreateDateColumn()
CreatedAt;
@Column()
Status: StatusEnum;
}

export enum StatusEnum {
    'actif' = "En cours",
    'waiting' = "En attente",
    'done' = "Finalisé"
}