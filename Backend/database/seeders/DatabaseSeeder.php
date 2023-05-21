<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

const EDUCATION_LEVEL_CONCEPTS = [
    'Bachillerato incompleto',
    'Bachillerato completo',
    'Educación tecnica incompleta',
    'Educación tecnica completa',
    'Educación profesional incompleta',
    'Educación profesional completa',
    'Posgrado'
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
        \App\Models\Employee::factory(10)->create();
    }
}
