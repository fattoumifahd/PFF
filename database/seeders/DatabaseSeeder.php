<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Categorie;
use App\Models\Reservation;
use App\Models\Room;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // Categorie::factory()->create([
        //     'name' => 'couple',
        //     'description' => 'Experience romance and luxury in our spacious couple rooms. These elegantly designed rooms feature a comfortable queen-size bed, stylish decor, and all the amenities you need for a memorable stay. Unwind together and create lasting memories in this intimate setting.',
        //     'price' => 500
        // ]);
        Room::factory(30)->create();
        Reservation::factory(10)->create();
        
    }
}
