<?php

namespace Database\Factories;

use App\Models\Reservation;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $reservation = Reservation::all()->random();
        return [
            'method' => fake()->randomElement(['credit card', 'cash']),
            'reservation_id' => $reservation->id,
            'total' => $reservation->price
        ];
    }
}
