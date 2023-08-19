<?php

namespace Database\Seeders;

use App\Models\PropertyType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PropertyTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PropertyType::create(['title' => 'Apartment']);
        PropertyType::create(['title' => 'Condo']);
        PropertyType::create(['title' => 'Townhouse']);
        PropertyType::create(['title' => 'Building']);
        PropertyType::create(['title' => 'Villa']);
        PropertyType::create(['title' => 'House']);
    }
}
