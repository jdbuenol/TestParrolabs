# Installation method #1 (Docker)

## Requirements

- Docker
- Git

## Running process

- clone the repository `git clone https://github.com/jdbuenol/TestParrolabs.git`
- access the repository `cd TestParrolabs`
- run the docker containers with the build flag `sudo docker compose up --build -d` (this one might take a while)
- run the laravel migrations `sudo docker exec testparrolabs-backend-1 php artisan migrate`
- (optional) run the laravel seeders to poblate the database `sudo docker exec testparrolabs-backend-1 php artisan db:seed` as many times as you like
- access the frontend application running in port 3000: ![](./docImages/1.png)

# Installation method #2 (in local machine)

## Requirements

- Git
- node 18.16.0
- php
- phpunit
- php-zip
- php-mysql
- Composer
- A MySQL server running

## Running process

- clone the repository `git clone https://github.com/jdbuenol/TestParrolabs.git`

### Running Backend

- access the repository and folder backend `cd TestParrolabs/Backend`
- copy the .env.example `cp .env.example .env`
- edit the .env file modifying the DB credentials accordingly to the MySQL server
- install the php dependencies with composer `composer install`
- run the migrations `php artisan migrate`
- (optional) run the seeders to populate the databse `php artisan db:seed` as many times as you like
- run the backend server `php -S 0.0.0.0:8000 -t public`

### Running Frontend

- access the repository and folder frontend `cd TestParrolabs/Frontend`
- install the dependencies `npm install`
- edit the file `./src/app/environments/environment.ts` modifying the backendUrl value according to where the Backend server is running
- run the frontend server `npm start`