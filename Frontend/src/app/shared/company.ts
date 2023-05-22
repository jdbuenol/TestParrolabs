import { Position } from "./position";

export class Company{
    public id?: number;
    public name: string;
    public address: string;
    public zipCode: string;
    public positions?: Position[];
}