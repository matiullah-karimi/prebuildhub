<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $guarded = [];

    function scopeSearch($query) {
        $filters = request()->all();

        if (isset($filters['category'])) {
            $query->where('category', $filters['category']);
        }
    }
}
