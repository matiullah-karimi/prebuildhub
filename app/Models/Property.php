<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Property extends Model
{
    use HasFactory;
    use HasSlug;

    protected $guarded = [];
    protected $casts = [
        'images' => 'array',
        'aminities' => 'array',
        'videos' => 'array',
    ];

    /**
     * Get the options for generating the slug.
    */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug');
    }

    function scopeSearch($query) {
        $filters = request()->all();

        if (isset($filters['type'])) {
            $query->where('property_type_id', $filters['type']);
        }

        if (isset($filters['status'])) {
            $query->where('property_status_id', $filters['status']);
        }

        if (isset($filters['budget'])) {
            $query->where('price', '>=', $filters['budget'])
                ->orWhere('price', '<=', $filters['budget']);
        }

        return $query;
    }
}
