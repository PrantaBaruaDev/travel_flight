<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flights extends Model
{
    use HasFactory;

    protected $fillable = [
        'airline_id',
        'flight_num',
        'departure_airport_code',
        'arrival_airport_code',
        'departure_time',
        'arrival_time',
        'price',
        'status',
    ];
    protected $casts = [
        'departure_time' => 'datetime:Y-m-d H:i:s',
        'arrival_time' => 'datetime:Y-m-d H:i:s',
    ];
}
