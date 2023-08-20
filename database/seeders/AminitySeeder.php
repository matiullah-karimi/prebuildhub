<?php

namespace Database\Seeders;

use App\Models\Aminity;
use Illuminate\Database\Seeder;

class AminitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Aminity::create(['title' => 'Air Conditioning']);
        Aminity::create(['title' => 'Balcony']);
        Aminity::create(['title' => 'Bedding']);
        Aminity::create(['title' => 'Cable TV']);
        Aminity::create(['title' => 'Cleaning after Exit']);
        Aminity::create(['title' => 'Cofee pot']);
        Aminity::create(['title' => 'Computer']);
        Aminity::create(['title' => 'Cot']);
        Aminity::create(['title' => 'Dishwasher']);
        Aminity::create(['title' => 'DVD']);
        Aminity::create(['title' => 'Fan']);
        Aminity::create(['title' => 'Fridge']);
        Aminity::create(['title' => 'Grill']);
        Aminity::create(['title' => 'Hairdryer']);
        Aminity::create(['title' => 'Heating']);
        Aminity::create(['title' => 'Hi-fi']);
        Aminity::create(['title' => 'Internet']);
        Aminity::create(['title' => 'Iron']);
        Aminity::create(['title' => 'Juicer']);
        Aminity::create(['title' => 'Lift']);
        Aminity::create(['title' => 'Microwave']);
        Aminity::create(['title' => 'Oven']);
        Aminity::create(['title' => 'Parking']);
        Aminity::create(['title' => 'Parquet']);
        Aminity::create(['title' => 'Radio']);
        Aminity::create(['title' => 'Roof terrace']);
        Aminity::create(['title' => 'Smoking allowed']);
        Aminity::create(['title' => 'Terrace']);
        Aminity::create(['title' => 'Toaster']);
        Aminity::create(['title' => 'Towelwes']);
        Aminity::create(['title' => 'Pool']);
        Aminity::create(['title' => 'Video']);
        Aminity::create(['title' => 'Wine glasses']);
    }
}
