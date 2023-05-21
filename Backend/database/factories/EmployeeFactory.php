<?php

namespace Database\Factories;

use App\Models\Employee;
use App\Models\EducationLevel;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

class EmployeeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Employee::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $randomEducationLevel = EducationLevel::inRandomOrder()->first()->getId();
        $birthDate = $this->faker->dateTimeBetween('-50 years', '-18 years');
        print($birthDate->format('Y-m-d').'\n');
        $name = $this->faker->name;
        print($name.'\n\n');
        return [
            'name' => $name,
            'birthDate' => $birthDate,
            'education_level_id' => $randomEducationLevel,
            'recordDate' => $this->faker->dateTimeBetween($birthDate->modify('+18 years')->format('Y-m-d') , 'now')
        ];
    }
}
