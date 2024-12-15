<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Airports extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'airport_code',
        'name',
        'city',
        'country',
        'facilites',
    ];
}
