<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Position;
use DateTime;

class PositionController extends BaseController
{
    function readPositions()
    {
        $allPositions = Position::with(['company'])->get();
        return $allPositions;
    }

    function readPosition(int $id)
    {
        $position = Position::with(['company', 'employee'])->find($id);
        if($position == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested position was not found"
            ], 404);
        }
        return $position;
    }

    function createPosition(Request $request)
    {
        $this->validate(
            $request, [
                'role' => 'required|max:50',
                'yearsExperience' => 'required|integer|between:0,10',
                'salary' => 'required|integer|gte:1200000',
                'company_id' => 'required|exists:companies,id'
            ]
        );

        Position::create(
            [
                'role' => $request->role,
                'yearsExperience' => $request->yearsExperience,
                'salary' => $request->salary,
                'company_id' => $request->company_id
            ]
        );

        return [
            'success' => 1,
            'msg' => 'Position created successfully'
        ];
    }

    function updatePosition(int $id, Request $request)
    {
        $this->validate(
            $request, [
                'role' => 'nullable|max:50',
                'yearsExperience' => 'nullable|integer|between:0,10',
                'salary' => 'nullable|integer|gte:1200000',
                'employee_id' => 'nullable|exists:employees,id',
                'company_id' => 'nullable|exists:companies,id'
            ]
        );

        $position = Position::find($id);
        
        if($position == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested position was not found"
            ], 404);
        }

        if($position->getEmployeeId() != null) {
            return response([
                'error' => 'NotModifiable',
                'msg' => 'You can\'t modify a position already occupied by an employee'
            ], 422);
        }
        else{
            if($request->role) $position->setRole($request->role);
            if($request->yearsExperience) $position->setYearsExperience($request->yearsExperience);
            if($request->salary) $position->setSalary($request->salary);
            if($request->company_id) $position->setCompanyId($request->company_id);
            if($request->employee_id){
                $position->setEmployeeId($request->employee_id);
                $position->setStartDate(new DateTime());
            }
        }
        $position->save();

        return [
            'success' => 1,
            'msg' => 'Position modified successsfully'
        ];
    }

    function endContract(int $id)
    {
        $position = Position::find($id);

        if($position == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested position was not found"
            ], 404);
        }

        if($position->getEmployeeId() == null){
            return response([
                'error' => "NotModifiable",
                'msg' => "You can't end a position that is still vacant"
            ], 422);
        }

        if($position->getEndDate() != null){
            return response([
                'error' => "NotModifiable",
                'msg' => "This position has already closed"
            ], 422);
        }

        $position->setEndDate(new DateTime());
        $position->save();

        return [
            'success' => 1,
            'msg' => 'Position modified successfully'
        ];
    }

    function deletePosition(int $id)
    {
        $position = Position::find($id);

        if($position == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested position was not found"
            ], 404);
        }

        $position->delete();

        return [
            'success' => 1,
            'msg' => 'Position deleted successfully'
        ];
    }
}
