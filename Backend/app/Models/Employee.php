<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employee extends BaseModel
{
   use HasFactory;

   /**
    * Employee Attributes
    * $this->id - int - contains the Employee primary key (id)
    * $this->name - string - contains the name of the employee
    * $this->birthDate - Date - contains the birth date of the employee
    * $this->recordDate - Date - contains the date in which the employee was registered into the system
    * 
    * $this->educationLevelID - int - contains the foreign key of EducationLevel
    * $this->educationLevel - EducationLevel - contains the object EducationLevel
    * $this->positions - Position[] - contains all the positions this employee has been employed to
    */

   protected $fillable = ['name', 'birthDate', 'educationLevelId', 'recordDate'];

   function getId()
   {
      return $this->id;
   }

   function getName()
   {
      return $this->name;
   }

   function setName($name)
   {
      $this->name = $name;
   }

   function getBirthDate()
   {
      return $this->birthDate;
   }

   function setBirthDate($birthDate)
   {
      $this->birthDate = $birthDate;
   }

   function getRecordDate()
   {
      return $this->recordDate;
   }

   function setRecordDate($recordDate)
   {
      $this->recordDate = $recordDate;
   }

   function educationLevel()
   {
      return $this->belongsTo(EducationLevel::class);
   }

   function getEducationLevel()
   {
      return $this->educationLevel;
   }

   function getEducationLevelId()
   {
      return $this->education_level_id;
   }

   function setEducationLevelId($education_level_id)
   {
      $this->education_level_id = $education_level_id;
   }

   function positions()
   {
      return $this->hasMany(Position::class);
   }

   function getPositions()
   {
      return $this->positions;
   }
}
