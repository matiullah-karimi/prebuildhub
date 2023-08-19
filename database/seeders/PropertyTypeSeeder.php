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
        PropertyType::create(['title' => 'Land']);
        PropertyType::create(['title' => 'Island']);
        PropertyType::create(['title' => 'Commercial']);
        PropertyType::create(['title' => 'Hotel']);
        PropertyType::create(['title' => 'Industrial']);
        PropertyType::create(['title' => 'Office']);
        PropertyType::create(['title' => 'Parking']);
        PropertyType::create(['title' => 'Restaurant']);
        PropertyType::create(['title' => 'Retail']);
        PropertyType::create(['title' => 'Warehouse']);
    }
}
