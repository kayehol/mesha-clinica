<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Atendimento;
use App\Models\Procedimento;
use App\Models\Profissional;

class AtendimentoController extends Controller
{
    public function index()
    {
        $atendimentos = Atendimento::all();

        return response()->json($atendimentos);
    }

    public function show($id)
    {
        $atendimento = Atendimento::findOrFail($id);

        return response()->json($atendimento);
    }

    public function store(Request $request)
    {
        try {
            //Cria um atendimento para cada procedimento
            $registrosProcedimentos = array();
            $novoAtendimento = array();

            foreach($request->input('procedimentos') as $procedimentoObj) {
                $procedimento = Procedimento::findOrFail($procedimentoObj['id_procedimento']);
                $profissional = Profissional::findOrFail($procedimentoObj['id_profissional']);

                $valorParcial = $procedimento->valor;
                $valorTotalProc = $valorParcial + ($valorParcial * floatval(('0.'.strval($profissional->comissao))));
                
                $novoAtendimento['id_cliente'] = $request->input('id_cliente');
                $novoAtendimento['id_procedimento'] = $procedimento->id;
                $novoAtendimento['id_profissional'] = $profissional->id;
                $novoAtendimento['valor_total'] = $valorTotalProc;

                $novoProcedimento = Atendimento::create($novoAtendimento);
                array_push($registrosProcedimentos, $novoProcedimento);
            }
        
            return response()->json($registrosProcedimentos);

        } catch (Throwable $e) {
            return response()->json($e);
        }
        
    }

    public function delete($id)
    {
        $atendimento = Atendimento::findOrFail($id);
        $atendimento->delete();

        return response()->json(null, 204);
    }
}
