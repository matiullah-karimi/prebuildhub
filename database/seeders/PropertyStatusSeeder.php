<?php

namespace Database\Seeders;

use App\Models\PropertyStatus;
use Illuminate\Database\Seeder;

class PropertyStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PropertyStatus::create(['title' => 'Pending', 'can_sell' => false, 'is_default' => true]);
        PropertyStatus::create(['title' => 'Approved', 'can_sell' => true, 'is_default' => false]);
        PropertyStatus::create(['title' => 'Sold', 'can_sell' => false, 'is_default' => false]);
    }
}
