import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InfoIcon from '@mui/icons-material/Info';

const Atendimentos = () => {
    const [atendimentos, setAtendimentos] = useState([]);

    useEffect(() => {
        const pegarDados = async() => {
            const result = await axios.get('http://localhost:8000/api/atendimentos');
            setAtendimentos(result.data);
        }
        pegarDados();
    }, [])
    return (
        <Grid container alignItems="center" justifyContent="center">
            <Grid item> 
                <List>
                    {atendimentos && atendimentos.map((atend, idx) => (
                        <>
                            <ListItem key={idx} divider>
                                <ListItemButton component={Link} to={`/atendimentos/${atend.id}`}>
                                    <ListItemIcon>
                                        <InfoIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText primary={`[ ${atend.id} ] - Valor: R$${atend.valor_total}`}/>                            
                                </ListItemButton>
                            </ListItem>
                            <Divider light variant="fullWidth" component="li" />
                        </>
                    ))}
                </List> 
            </Grid>
        </Grid>
    )
}

export default Atendimentos;