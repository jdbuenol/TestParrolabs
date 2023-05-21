<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class Company extends BaseModel
{
    use HasFactory;

    /**
     * Company Attributes
     * $this->id - int - contains the Company primary key (id)
     * $this->name - string - contains the name of the company
     * $this->address - string - contains the information of the address of the company
     * $this->zipCode - string - contains the zip code of the company
     * 
     * $this->getVacants() - Position[] - returns all the positions that are still available (vacants)
     * $this->positions - Position[] - contains all the positions of this company
     */

    protected $fillable = ['name', 'address', 'zipCode'];

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

    function getAddress()
    {
        return $this->address;
    }

    function setAddress($address)
    {
        $this->address = $address;
    }

    function getZipCode()
    {
        return $this->zipCode;
    }

    function setZipCode($zipCode)
    {
        $this->zipCode = $zipCode;
    }

    function positions()
    {
        return $this->hasMany(Position::class);
    }

    function getPositions()
    {
        return $this->positions;
    }

    function getVacants()
    {
        return array_filter($this->positions, function($position, $key){
            return $position->employee_id == null;
        }, ARRAY_FILTER_USE_BOTH);
    }
}
