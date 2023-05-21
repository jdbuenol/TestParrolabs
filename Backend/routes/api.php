<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// Employees CRUD

$router->get('/employees', 'EmployeeController@readEmployees');

$router->get('/employees/{id}', 'EmployeeController@readEmployee');

$router->post('/employees', 'EmployeeController@createEmployee');

$router->put('/employees/{id}', 'EmployeeController@updateEmployee');

$router->delete('/employees/{id}', 'EmployeeController@deleteEmployee');

// Get Education Levels

$router->get('/educationLevels', 'EducationLevelController@readEducationLevel');

// Companies CRUD

$router->get('/companies', 'CompanyController@readCompanies');

$router->get('/companies/{id}', 'CompanyController@readCompany');

$router->post('/companies', 'CompanyController@createCompany');

$router->put('/companies/{id}', 'CompanyController@updateCompany');

$router->delete('/companies/{id}', 'CompanyController@deleteCompany');

// Positions CRUD

$router->get('/positions', 'PositionController@readPositions');

$router->get('/positions/{id}', 'PositionController@readPosition');

$router->post('/positions', 'PositionController@createPosition');

$router->put('/positions/{id}', 'PositionController@updatePosition');

$router->put('/positions/{id}/endContract', 'PositionController@endContract');

$router->delete('/positions/{id}', 'PositionController@deletePosition');