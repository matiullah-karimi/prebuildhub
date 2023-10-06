<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'PrebuildHub Admin',
            'email' => 'admin@prebuildhub.com',
            'password' => bcrypt('Admin@2023'),
            'role' => User::ROLE_ADMIN,
            'email_verified_at' => now(),
        ]);
    }
}
