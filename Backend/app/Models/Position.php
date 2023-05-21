<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Position extends BaseModel
{
    use HasFactory;

    /**
     * Company Attributes
     * $this->id - int - contains the Company primary key (id)
     * $this->role - string - contains the information of the position
     * $this->yearsExperience - int - contains the years of experience required for entering this position
     * $this->salary - int - contains the base salary for the position
     * $this->startDate - Nullable<date> - contains the date in which the employee started to work in this position, null if still vacant
     * $this->endDate - Nullable<date> - contains the date in which the employee finished to work in this position, null if still vacant or if employee is currently working there.
     * 
     * $this->company - Company - contains the object company to which this position belongs
     * $this->company_id - int - contains the foreign key of the table Company
     * $this->employee - Nullable<Employee> - contains the object employee who is currently working in this position, may be null
     * $this->employee_id - Nullable<int> - contains the foreign key of the table Employee, may be null
     */

    protected $fillable = ['role', 'yearsExperience', 'salary', 'startDate', 'endDate', 'company_id', 'employee_id'];

    function getId()
    {
        return $this->id;
    }

    function getRole()
    {
        return $this->role;
    }

    function setRole($role)
    {
        $this->role = $role;
    }

    function getYearsExperience()
    {
        return $this->yearsExperience;
    }

    function setYearsExperience($yearsExperience)
    {
        $this->yearsExperience = $yearsExperience;
    }

    function getSalary()
    {
        return $this->salary;
    }

    function setSalary($salary)
    {
        $this->salary = $salary;
    }

    function getStartDate()
    {
        return $this->startDate;
    }

    function setStartDate($startDate)
    {
        $this->startDate = $startDate;
    }

    function getEndDate()
    {
        return $this->endDate;
    }

    function setEndDate($endDate)
    {
        $this->endDate = $endDate;
    }

    function company()
    {
        return $this->belongsTo(Company::class);
    }

    function getCompany()
    {
        return $this->company;
    }

    function getCompanyId()
    {
        return $this->company_id;
    }

    function setCompanyId($company_id)
    {
        $this->company_id = $company_id;
    }

    function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    function getEmployee()
    {
        return $this->employee;
    }

    function getEmployeeId()
    {
        return $this->employee_id;
    }

    function setEmployeeId($employee_id)
    {
        $this->employee_id = $employee_id;
    }
}
