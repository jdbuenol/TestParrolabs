<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Models\EducationLevel;

class EducationLevelController extends BaseController
{
    function get()
    {
        $allEducationLevels = EducationLevel::all();
        return $allEducationLevels;
    }
}