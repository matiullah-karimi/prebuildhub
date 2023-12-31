<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('country')->nullable();
            $table->foreignId('city_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('province_id')->nullable()->constrained()->nullOnDelete();
            $table->string('address_line_1');
            $table->string('address_line_2')->nullable();
            $table->string('zip_code');
            $table->boolean('featured')->default(false);
            $table->boolean('upcoming')->default(false);
            $table->integer('area');
            $table->integer('bathroom');
            $table->integer('bedroom');
            $table->integer('floor')->nullable();
            $table->longText('description');
            $table->double('price');
            $table->json('images');
            $table->json('videos')->nullable();
            $table->json('aminities')->nullable();
            $table->json('floor_plans')->nullable();
            $table->foreignId('user_id');
            $table->timestamp('approved_at')->nullable();
            $table->foreignId('property_status_id');
            $table->foreignId('property_type_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
