<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    function index() {
        return Inertia::render('Home', [
            'properties' => [
                'featured' => Property::all(),
                'upcoming' => Property::all(),
                'sold' => Property::all(),
            ]
        ]);
    }
}
