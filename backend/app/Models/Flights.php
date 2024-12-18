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

    // Define the relationship with Airline
    public function airline()
    {
        return $this->belongsTo(Airline::class);
    }

    // Custom method to join with Airline
    public static function joinWithAirline()
    {
        return self::join('airlines', 'flights.airline_id', '=', 'airlines.id')
            ->join('flight_statuses', 'flights.status', '=', 'flight_statuses.id') 
            ->select('flights.*', 'airlines.name as airline_name', 'airlines.code as airline_code', 'flight_statuses.status as flight_status')
            ->get();
    }
}
