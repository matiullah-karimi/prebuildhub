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
    protected $appends = ['features', 'address'];

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

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function type() {
        return $this->belongsTo(PropertyType::class, 'property_type_id');
    }

    public function status() {
        return $this->belongsTo(PropertyStatus::class, 'property_status_id');
    }

    public function city() {
        return $this->belongsTo(City::class);
    }

    public function province() {
        return $this->belongsTo(Province::class);
    }

    public function getFeaturesAttribute() {
        return Aminity::whereIn('id', $this->aminities)->get();
    }

    public function getFormattedPriceAttribute() {
        return number_format($this->price, 2);
    }

    public function getAddressAttribute() {
        return "{$this->address_line_1}, {$this->city->name}, {$this->province->name}, {$this->zip_code}";
    }
}
