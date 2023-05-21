<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

const EDUCATION_LEVEL_CONCEPTS = [
    'incomplete primary school',
    'complete primary school',
    'incomplete middle school',
    'complete middle school',
    'incomplete secondary school',
    'complete secondary school',
    'incomplete undergraduate',
    'complete undergraduate',
    'incomplete graduate',
    'complete graduate'
];

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if(! \App\Models\EducationLevel::exists()){
            for($i = 0; $i < count(EDUCATION_LEVEL_CONCEPTS); $i++){
                \App\Models\EducationLevel::create(['concept' => EDUCATION_LEVEL_CONCEPTS[$i]]);
            }
        }
        if(! \App\Models\Company::exists()){
            \App\Models\Company::factory(10)->create();
        }
        \App\Models\Employee::factory(10)->create();
        \App\Models\Position::factory(25)->create();
    }
}
