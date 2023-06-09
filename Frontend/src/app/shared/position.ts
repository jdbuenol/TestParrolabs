import { Company } from "./company";
import { Employee } from "./employee";

export class Position{
    public id?: number;
    public role: string;
    public yearsExperience: number;
    public salary: number;
    public startDate?: Date;
    public endDate?: Date;
    public company_id: number;
    public employee_id?: number;
    public company?: Company;
    public employee?: Employee;
}