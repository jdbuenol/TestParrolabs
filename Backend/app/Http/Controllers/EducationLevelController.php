<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;
use App\Models\EducationLevel;

class EducationLevelController extends BaseController
{
    function readEducationLevel()
    {
        $allEducationLevels = EducationLevel::all();
        return $allEducationLevels;
    }
}
