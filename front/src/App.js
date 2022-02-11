import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Atendimentos from "./components/Atendimentos";
import NovoAtendimento from './components/NovoAtendimento';
import Atendimento from './components/Atendimento';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              <h2>Clínica - Atendimentos</h2>
            </Grid>
            <Grid item>
              <Button variant='contained'>
                <Link to="/criar">
                  Criar
                </Link>
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained'>
                <Link to="/">
                  INÍCIO
                </Link>
              </Button>
            </Grid>
          </Grid>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Atendimentos />} />
        <Route path="/criar" element={<NovoAtendimento />} />
        <Route path="/atendimentos/:id" element={<Atendimento />} />
      </Routes>
    </Router>
  );
}

export default App;
