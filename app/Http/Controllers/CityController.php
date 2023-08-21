<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use Inertia\Inertia;

class CityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Cities/Index', [
            'filters' => request()->all('search'),
            'cities' => City::orderBy('name')
                ->filter(request()->only('search'))
                ->paginate()
                ->withQueryString()
                ->through(fn ($city) => [
                    'id' => $city->id,
                    'name' => $city->name,
                    'state' => $city->state->name,
                    'created_at' => $city->created_at->format('m/d/Y'),
                ]),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cities/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCityRequest $request)
    {
        City::create($request->validated());

        return redirect()->route('cities.index')->with('success', 'City created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(City $city)
    {
        return Inertia::render('Cities/Show', [
            'city' => [
                'id' => $city->id,
                'name' => $city->name,
                'state' => $city->state->name,
                'created_at' => $city->created_at->format('m/d/Y'),
            ],
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(City $city)
    {
        return Inertia::render('Cities/Edit', [
            'city' => [
                'id' => $city->id,
                'name' => $city->name,
                'state_id' => $city->state_id,
            ],
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCityRequest $request, City $city)
    {
        $city->update($request->validated());

        return redirect()->route('cities.index')->with('success', 'City updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(City $city)
    {
        $city->delete();

        return redirect()->route('cities.index')->with('success', 'City deleted.');
    }
}
