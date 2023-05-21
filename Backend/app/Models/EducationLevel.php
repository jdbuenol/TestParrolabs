<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationLevel extends Model
{
    /**
     * EducationLevel Attributes
     * $this->id - int - contains the EducationLevel primary key (id)
     * $this->concept - string - contains the description of the Education Level
     */

     protected $fillable = ['concept'];

     function getId()
     {
        return $this->id;
     }

     function getConcept()
     {
        return $this->concept;
     }

     function setConcept($concept)
     {
        $this->concept = $concept;
     }
}