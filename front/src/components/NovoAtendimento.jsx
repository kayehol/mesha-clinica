import { useEffect, useState } from "react";
//import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Resumo from "./Resumo";

import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const NovoAtendimento = () => {
    const [clientes, setClientes] = useState([]);
    const [procedimentos, setProcedimentos] = useState([]);

    const [cliente, setCliente] = useState({});
    const [procedimento, setProcedimento] = useState({});

    const [procedimentosSelecionados, setProcedimentosSelecionados] = useState([]);
    const [atendimento, setAtendimento] = useState({});

    const [criado, setCriado] = useState(false);

    const getValorTotal = () => {
        let soma = 0;

        for (let proc of procedimentosSelecionados) {
            soma += proc.valor + (proc.valor * (proc.comissao/100));
        }

        return Math.floor(soma);
    }

    const handleChangeCliente = (e) => {
        setCliente(e.target.value);
    }

    const handleChangeProcedimento = (e) => {
        setProcedimento(e.target.value);
    }

    const addProcedimento = () => {
        setProcedimentosSelecionados((prev) => [...prev, procedimento]);
    }

    const handleAtendimento = () => {
        
        setAtendimento({
            id_cliente : cliente.id, 
            procedimentos: procedimentosSelecionados,
            valor_total: getValorTotal()
        });
    }

    const handleConfirma = async() => {
        //prepara post request
        let atendimentoNovo = {};

        atendimentoNovo.id_cliente = atendimento.id_cliente;
        atendimentoNovo.procedimentos = []

        for (let proc of atendimento.procedimentos) {
            atendimentoNovo.procedimentos.push({ id_procedimento: proc.id, id_profissional: proc.id_profissional });
        }
        console.log('atendimentoNovo:', atendimentoNovo)

        const result = await axios.post('http://localhost:8000/api/atendimentos', atendimentoNovo);
        
        if (result) { setCriado(true) };
    }

    useEffect(() => {
        const pegarDadosClientes = async() => {
            const result = await axios.get(`http://localhost:8000/api/clientes`);
            setClientes(result.data);
        }
        const pegarDadosProcedimentos = async() => {
            const result = await axios.get(`http://localhost:8000/api/procedimentos`);
            setProcedimentos(result.data);
        }

        pegarDadosClientes();
        pegarDadosProcedimentos();
    }, [])

    return (
        <>
            <Grid container alignItems="center" justifyContent="center" direction="column" xs={8}>
                {/* {cliente && <pre>{JSON.stringify(cliente, null, 2)}</pre>} */}
                <Grid item xs>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="clientes">Selecione o cliente</InputLabel>
                        <Select
                            labelId="clientes"
                            id="clientes-select"
                            value={cliente}
                            label="clientes"
                            onChange={handleChangeCliente}
                        >
                            {clientes && clientes.map((cliente) => (
                                <MenuItem value={cliente}>{cliente.nome}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {/* {procedimento && <pre>{JSON.stringify(procedimento, null, 2)}</pre>} */}
                <Grid item xs>
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="procedimentos">Selecione o procedimento</InputLabel>
                        <Select
                            labelId="procedimentos"
                            id="procedimentos-select"
                            value={procedimento}
                            label="procedimentos"
                            onChange={handleChangeProcedimento}
                        >
                            {procedimentos && procedimentos.map((proc) => (
                                <MenuItem value={proc}>{proc.nome}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                {/* {procedimentosSelecionados && <pre>{JSON.stringify(procedimentosSelecionados, null, 2)}</pre>} */}
                <Grid item>
                    <Button variant="contained" onClick={addProcedimento}>
                        Adicionar procedimento
                    </Button>
                </Grid>
                {atendimento && <pre>{JSON.stringify(atendimento, null, 2)}</pre>}

                <Grid item>
                    <Button variant="contained" onClick={handleAtendimento}>
                        Criar atendimento
                    </Button>
                </Grid>
                {/* {atendimento && <Grid item>
                    <Resumo 
                        atendimento={atendimento}
                    />
                </Grid>}*/}

                <Grid item>
                    <Button variant="contained" onClick={handleConfirma}>
                        Confirmar
                    </Button>
                </Grid>
                {criado && <Grid item><h3>Atendimento criado!</h3></Grid>}
            </Grid>
        </>
    )
}

export default NovoAtendimento