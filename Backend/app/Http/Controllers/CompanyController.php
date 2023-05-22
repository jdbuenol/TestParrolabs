<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\Company;

class CompanyController extends BaseController
{
    function readCompanies()
    {
        $allCompanies = Company::with(['positions'])->get();
        return $allCompanies;
    }

    function readCompany(int $id)
    {
        $company = Company::with(['positions'])->find($id);
        if($company == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested company was not found"
            ], 404);
        }
        return $company;
    }

    function createCompany(Request $request)
    {
        $this->validate(
            $request, [
                'name' => 'required|max:40',
                'address' => 'required|max:80',
                'zipCode' => 'required|max:10'
            ]
        );

        Company::create(
            [
                'name' => $request->name,
                'address' => $request->address,
                'zipCode' => $request->zipCode
            ]
        );

        return [
            'success' => 1,
            'msg' => 'Company created successfully'
        ];
    }

    function updateCompany(int $id, Request $request)
    {
        $this->validate(
            $request, [
                'name' => 'nullable|max:40',
                'address' => 'nullable|max:80',
                'zipCode' => 'nullable|max:10'
            ]
        );

        $company = Company::find($id);

        if($company == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested company was not found"
            ], 404);
        }

        if($request->name) $company->setName($request->name);
        if($request->address) $company->setAddress($request->address);
        if($request->zipCode) $company->setZipCode($request->zipCode);
        $company->save();

        return [
            'success' => 1,
            'msg' => 'Company modified successsfully'
        ];
    }

    function deleteCompany(int $id)
    {
        $company = Company::find($id);

        if($company == null){
            return response([
                'error' => "NotFound",
                'msg' => "The requested company was not found"
            ], 404);
        }

        $company->delete();

        return [
            'success' => 1,
            'msg' => 'Company deleted successfully'
        ];
    }
}
