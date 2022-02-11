import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';


const Resumo = ({atendimento}) => {
    //const clienteId = props.atendimento.cliente_id;
    //console.log(atendimento);
    const procedimentos = atendimento.procedimentos;
    
    return (
        <>
            <Grid container alignItems="center" justifyContent="center">
                <ul>
                    {procedimentos.map((proc, idx) => (
                        <Grid item>
                            <li>Procedimento: {proc.nome}</li>
                            <li>Valor parcial: {proc.valor}</li>
                            <li>Profissional: {proc.nome_profissional}</li>
                            <li>Comissão: {proc.comissao}</li>
                            <li>Valor total: {Math.floor(proc.valor + (proc.valor * (proc.comissao/100)))}</li>
                        </Grid>
                    ))}
                </ul>
            </Grid>
        </>
    )
}

export default Resumo