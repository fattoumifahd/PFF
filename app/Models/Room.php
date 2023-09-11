<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;
    public function reservation() {
        return $this->hasMany(Reservation::class);
    }
    public function categorie() {
        return $this->belongsTo(Categorie::class, 'categorie_id');
    }

    protected $fillable = ['reserved'];

}
