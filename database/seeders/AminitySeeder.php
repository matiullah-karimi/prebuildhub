<?php

namespace Database\Seeders;

use App\Models\Aminity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AminitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Aminity::create(['name' => 'Air Conditioning']);
        Aminity::create(['name' => 'Balcony']);
        Aminity::create(['name' => 'Bedding']);
        Aminity::create(['name' => 'Cable TV']);
        Aminity::create(['name' => 'Cleaning after Exit']);
        Aminity::create(['name' => 'Cofee pot']);
        Aminity::create(['name' => 'Computer']);
        Aminity::create(['name' => 'Cot']);
        Aminity::create(['name' => 'Dishwasher']);
        Aminity::create(['name' => 'DVD']);
        Aminity::create(['name' => 'Fan']);
        Aminity::create(['name' => 'Fridge']);
        Aminity::create(['name' => 'Grill']);
        Aminity::create(['name' => 'Hairdryer']);
        Aminity::create(['name' => 'Heating']);
        Aminity::create(['name' => 'Hi-fi']);
        Aminity::create(['name' => 'Internet']);
        Aminity::create(['name' => 'Iron']);
        Aminity::create(['name' => 'Juicer']);
        Aminity::create(['name' => 'Lift']);
        Aminity::create(['name' => 'Microwave']);
        Aminity::create(['name' => 'Oven']);
        Aminity::create(['name' => 'Parking']);
        Aminity::create(['name' => 'Parquet']);
        Aminity::create(['name' => 'Radio']);
        Aminity::create(['name' => 'Roof terrace']);
        Aminity::create(['name' => 'Smoking allowed']);
        Aminity::create(['name' => 'Terrace']);
        Aminity::create(['name' => 'Toaster']);
        Aminity::create(['name' => 'Towelwes']);
        Aminity::create(['name' => 'Pool']);
        Aminity::create(['name' => 'Video']);
        Aminity::create(['name' => 'Wine glasses']);
    }
}
