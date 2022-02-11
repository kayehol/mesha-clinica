<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Procedimento extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'valor'];

    public function profissionais()
    {
        return $this->hasOne(Profissional::class);
    }

}
