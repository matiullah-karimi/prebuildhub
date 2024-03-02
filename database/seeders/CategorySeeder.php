<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['name' => 'New Lead']);
        Category::create(['name' => 'Follow Up']);
        Category::create(['name' => 'In Contact']);
        Category::create(['name' => 'Serious']);
        Category::create(['name' => 'Signed Up Buyer']);
        Category::create(['name' => 'Signed Up Seller']);
        Category::create(['name' => 'Conditionally Sold Buyer']);
        Category::create(['name' => 'Conditionally Sold Seller']);
        Category::create(['name' => 'Closed Buyer']);
        Category::create(['name' => 'Closed Seller']);
    }
}
