<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        (new PropertyTypeSeeder())->run();
        (new PropertyStatusSeeder())->run();
        (new AminitySeeder())->run();
        (new ProvinceSeeder())->run();
        (new UserSeeder())->run();
        (new ContactsSeeder())->run();
        (new CategorySeeder())->run();
    }
}
