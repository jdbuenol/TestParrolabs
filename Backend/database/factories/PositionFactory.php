<?php

namespace Database\Factories;

use App\Models\Company;
use App\Models\Employee;
use App\Models\Position;
use Illuminate\Database\Eloquent\Factories\Factory;

const TECHNOLOGY = ['PHP', '.NET', 'C#', 'JavaScript', 'Python', 'Node', 'Deno', 'AWS', 'GO', 'Java', 'Mobile', 'Ruby'];
const POSITION = ['WEB DEVLEOPER', 'DATA ANALYST', 'DEVOPS', 'JUNIOR DEVELOPER', 'MID DEVELOPER', 'SENIOR DEVELOPER', 'SEMI-SENIOR DEVELOPER', 'BACK END DEVELOPER', 'FRONT END DEVELOPER', 'DATA SCIENTIST'];

class PositionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Position::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $randomCompany = Company::inRandomOrder()->first()->getId();
        $randomFloat = rand() / getrandmax();

        $randomEmployeeId = null;
        $startDate = null;

        if($randomFloat > 0.8){
            $randomEmployee = Employee::inRandomOrder()->first();
            $randomEmployeeId = $randomEmployee->getId();
            $startDate = $this->faker->dateTimeBetween($randomEmployee->getRecordDate(), 'now');
        }

        return [
            'role' => TECHNOLOGY[array_rand(TECHNOLOGY)].' '.POSITION[array_rand(POSITION)],
            'yearsExperience' => random_int(0, 10),
            'salary' => random_int(12, 90) * 100_000,
            'startDate' => $startDate,
            'company_id' => $randomCompany,
            'employee_id' => $randomEmployeeId
        ];
    }
}
