import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NovoAtendimento = () => {
    const {id} = useParams();
    
    const [atendimento, setAtendimento] = useState({});

    useEffect(() => {
        const pegarDados = async() => {
            const result = await axios.get(`http://localhost:8000/api/atendimentos/${id}`);
            setAtendimento(result.data);
        }
        pegarDados();
    }, [id])

    return (
        <Grid container alignItems="center" justifyContent="center">
            {atendimento && 
                  <Grid item>
                      <Card variant="outlined">
                          <CardContent>
                              <Typography variant='h4'>
                                Id: {atendimento.id}
                              </Typography>
                              <Typography variant='h4'>
                                Valor total: R${atendimento.valor_total}
                              </Typography>
                              <Typography variant='h5'>
                                Id Cliente{atendimento.id_cliente}                            
                              </Typography>
                              <Typography variant='h5'>
                                Id procedimento: {atendimento.id_procedimento}
                              </Typography>
                              <Typography variant='h5'>
                                Criado em: {atendimento.created_at}
                              </Typography>
                              <CardActions>
                                <Button component={Link} to="/"></Button>
                              </CardActions>
                          </CardContent>
                      </Card>
                 </Grid>
            } 
        </Grid>
    )
}

export default NovoAtendimento