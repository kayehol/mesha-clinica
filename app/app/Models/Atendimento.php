<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atendimento extends Model
{
    use HasFactory;

    protected $fillable = ['valor_total', 'id_cliente', 'id_procedimento'];

    public function procedimentos()
    {
        return $this->hasMany(Procedimento::class);
    }

    public function clientes()
    {
        return $this->hasOne(Cliente::class);
    }

    public function profissionais()
    {
        return $this->hasMany(Profissional::class);
    }

}
