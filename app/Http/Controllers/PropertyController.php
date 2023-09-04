<?php

namespace App\Http\Controllers;

use App\Models\Property;
use App\Http\Requests\StorePropertyRequest;
use App\Http\Requests\UpdatePropertyRequest;
use App\Models\Aminity;
use App\Models\PropertyStatus;
use App\Models\PropertyType;
use App\Models\Province;
use Inertia\Inertia;

class PropertyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Properties/Index', [
            'properties' => Property::search()
                ->paginate(20)->withQueryString(),
            'types' => PropertyType::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Properties/Create', [
            'types' => PropertyType::all(),
            'statuses' => PropertyStatus::all(),
            'aminities' => Aminity::all(),
            'provinces' => Province::with('cities')->get()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePropertyRequest $request)
    {
        $images = [];
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $images[] = '/storage/' . $image->store('/images', 'public');
            }
        }

        Property::create([
            ...$request->validated(),
            'images' => $images,
            'user_id' => auth()->id() ?? 1,
        ]);

        return redirect('/properties')->with('success', 'Property added successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(Property $property)
    {
        return Inertia::render('Properties/Show', [
            'property' => $property->load('user', 'type', 'status', 'city')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Property $property)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePropertyRequest $request, Property $property)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Property $property)
    {
        //
    }
}
