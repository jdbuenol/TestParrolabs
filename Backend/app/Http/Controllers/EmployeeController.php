<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends BaseController
{
    function get()
    {
        $allEmployees = Employee::all();
        return $allEmployees;
    }
}