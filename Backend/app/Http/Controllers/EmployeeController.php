<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Employee;
use DateTime;

class EmployeeController extends BaseController
{
    function readEmployees()
    {
        $allEmployees = Employee::all();
        return $allEmployees;
    }

    function readEmployee(int $id)
    {
        $employee = Employee::with(['positions'])->find($id);
        if($employee == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested company was not found"
            ], 404);
        }
        return $employee;
    }

    function createEmployee(Request $request)
    {
        $this->validate(
            $request, [
                'name' => 'required|max:255',
                'birthDate' => 'required|date|before:-18 years',
                'education_level_id' => 'required|exists:education_levels,id'
            ]
        );

        Employee::create(
            [
                'name' => $request->name,
                'birthDate' => $request->birthDate,
                'recordDate' => new DateTime(),
                'education_level_id' => $request->education_level_id
            ]
        );

        return [
            'success' => 1,
            'msg' => 'Employee created successfully'
        ];
    }

    function updateEmployee(int $id, Request $request)
    {
        $this->validate(
            $request, [
                'name' => 'nullable|max:255',
                'birthDate' => 'nullable|date|before:-18 years',
                'education_level_id' => 'nullable|exists:education_levels,id'
            ]
        );

        $employee = Employee::find($id);

        if($employee == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested company was not found"
            ], 404);
        }

        if($request->name) $employee->setName($request->name);
        if($request->birthDate) $employee->setBirthDate($request->birthDate);
        if($request->education_level_id) $employee->setEducationLevelId($request->education_level_id);
        $employee->save();

        return [
            'success' => 1,
            'msg' => 'Employee modified successsfully'
        ];
    }

    function deleteEmployee(int $id)
    {
        $employee = Employee::find($id);

        if($employee == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested company was not found"
            ], 404);
        }

        $employee->delete();

        return [
            'success' => 1,
            'msg' => 'Employee deleted successfully'
        ];
    }
}
