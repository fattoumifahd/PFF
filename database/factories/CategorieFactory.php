<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Categorie>
 */
class CategorieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = fake()->randomElement(['single','couple','family' ]);
        $description = '';
        $price = 0 ;
        if ($name === 'single') {
            $description = 'Our cozy single rooms provide a comfortable space for solo travelers. Enjoy a peaceful and relaxing atmosphere with a single bed, modern amenities, and a private bathroom. Perfect for those seeking tranquility during their stay.';
            $price = 300;
        } elseif ($name === 'couple') {
            $description = 'Experience romance and luxury in our spacious couple rooms. These elegantly designed rooms feature a comfortable queen-size bed, stylish decor, and all the amenities you need for a memorable stay. Unwind together and create lasting memories in this intimate setting.';
            $price = 500;
        } elseif ($name === 'family') {
            $description = 'Our family rooms are designed to accommodate your entire family comfortably. With ample space and thoughtful amenities, these rooms are perfect for a relaxing family vacation. Featuring multiple beds, a separate living area, and a private bathroom, you\'ll have plenty of room to unwind and enjoy quality time together.';
            $price = 800;
        }


        return [
            'name' => $name,
            'description' => $description,
            'price' => $price,
        ];
    }
}
