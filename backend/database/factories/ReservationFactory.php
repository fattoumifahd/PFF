<?php

namespace Database\Factories;

use App\Models\Room;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reservation>
 */
class ReservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'room_id' => Room::all()->where('reserved', '=' , 0)->random()->id,
            'user_id' => User::all()->random()->id,
            'start_date' => fake()->date(),
            'end_date' => fake()->date(),
            'price' => fake()->numberBetween(300,10000)
        ];
    }
}
