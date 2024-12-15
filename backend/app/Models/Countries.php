<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Countries extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'country_name',
        'short_name',
        'phone_code',
    ];
}
