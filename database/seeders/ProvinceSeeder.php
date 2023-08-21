<?php

namespace Database\Seeders;

use App\Models\Province;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Province::create(['name' => 'Ontario']);
        Province::create(['name' => 'Quebec']);
        Province::create(['name' => 'Nova Scotia']);
        Province::create(['name' => 'New Brunswick']);
        Province::create(['name' => 'Manitoba']);
        Province::create(['name' => 'British Columbia']);
        Province::create(['name' => 'Prince Edward Island']);
        Province::create(['name' => 'Saskatchewan']);
        Province::create(['name' => 'Alberta']);
        Province::create(['name' => 'Newfoundland and Labrador']);
        Province::create(['name' => 'Northwest Territories']);
    }
}
