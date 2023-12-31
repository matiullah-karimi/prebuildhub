<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class City extends Model
{
    use HasFactory;
    use HasSlug;

    protected $fillable = [
        'name',
        'province_id',
        'image',
    ];

    /**
     * Get the options for generating the slug.
    */
    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug');
    }

    function province() {
        return $this->belongsTo(Province::class);
    }

    function properties() {
        return $this->hasMany(Property::class);
    }
}
