<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Models\Property;
use App\Models\User;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index() {
        return Inertia::render('Home', [
            'properties' => [
                'featured' => Property::featured()->get(),
                'upcoming' => Property::upcoming()->get(),
                'sold' => Property::sold()->get(),
            ],
            'cities' => City::limit(3)->get(),
            'builders' => User::builders()->limit(3)->get(),
        ]);
    }
}
