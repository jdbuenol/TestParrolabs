<?php

namespace App\Models;

class EducationLevel extends BaseModel
{
   /**
    * EducationLevel Attributes
    * $this->id - int - contains the EducationLevel primary key (id)
    * $this->concept - string - contains the description of the Education Level
    * 
    * $this->employees - Employee[] - contains all the employees that belongs to this education level
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

   function employees()
   {
      return $this->hasMany(Employee::class);
   }

   function getEmployees()
   {
      return $this->employees;
   }
}
