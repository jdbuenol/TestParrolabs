import { Position } from './position'

export class Employee{
    id?: number;
    name: string;
    birthDate: Date;
    recordDate?: Date;
    education_level_id: number;
    positions?: Position[];
}