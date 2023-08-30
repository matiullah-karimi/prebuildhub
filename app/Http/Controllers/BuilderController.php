<?php

namespace App\Http\Controllers;

use App\Http\Requests\BuilderStoreRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuilderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Builders/Index', [
            'builders' => User::where('role', User::ROLE_BUILDER)->paginate(20)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Builders/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(BuilderStoreRequest $request)
    {
        $image = null;

        if ($request->hasFile('image')) {
            $image = '/storage/' . $request->file('image')->store('builders', 'public');
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'role' => User::ROLE_BUILDER,
            'password' => bcrypt($request->password),
            'image' => $image,
        ]);

        return redirect()->route('builders.index')->with('success', 'Builder created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
