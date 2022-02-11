<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Procedimento;
use App\Models\Profissional;


class ProcedimentoController extends Controller
{
    public function index()
    {
        $procedimentosUpdated = array();

        $procedimentos = Procedimento::all();
        foreach($procedimentos as $procedimento) {
            $prof = Profissional::findOrFail($procedimento->id_profissional);
            $procedimento->nome_profissional = $prof->nome;
            $procedimento->comissao = $prof->comissao;
            array_push($procedimentosUpdated, $procedimento);
        }

        return response()->json($procedimentosUpdated);
    }
}
