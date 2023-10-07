<?php

namespace App\Http\Controllers;

use App\Models\City;
use App\Http\Requests\StoreCityRequest;
use App\Http\Requests\UpdateCityRequest;
use App\Models\Province;
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
                // ->filter(request()->only('search'))
                ->paginate()
                ->withQueryString()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Cities/Create', [
            'provinces' => Province::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCityRequest $request)
    {
        $image = null;
        if ($request->hasFile('image')) {
            $image = '/storage/' . $request->file('image')->store('cities', 'public');
        }

        City::create([
            'name' => $request->name,
            'province_id' => $request->province_id,
            'image' => $image,
        ]);

        return redirect()->route('cities.index')->with('success', 'City created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(City $city)
    {
        return Inertia::render('Cities/Show', [
            'city' => $city->load('properties'),
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
                'province_id' => $city->province_id,
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
