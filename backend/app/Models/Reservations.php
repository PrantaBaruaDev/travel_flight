<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Reservations extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'flight_id',
        'seat_id',
        'reservation_date',
        'status',
    ];
}
