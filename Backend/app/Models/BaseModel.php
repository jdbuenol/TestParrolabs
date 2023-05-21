<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BaseModel extends Model
{

    /**
     * Base Model for other models to extend
     */

    public $timestamps = false;
}
