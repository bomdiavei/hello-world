import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import AppBarNotLoggedIn from './components/AppBarNotLoggedIn';
// import AppBarLoggedIn from './components/AppBarLoggedIn';
import Cards from './components/Cards';
import Grid from '@material-ui/core/Grid';
import Filters from './components/Filters'

const useStyles = makeStyles(theme => ({
  cards: {
    '& > *': {
      margin: theme.spacing(2),
    },
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    justifyContent: "space-around",
  },
  filters: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div>
        <AppBarNotLoggedIn />
        {/* <AppBarLoggedIn/> */}
      </div>

      <div className={classes.filters}>
        <Filters />
        {/* cartoes */}
        <Grid className={classes.cards}>
          <Cards dogPic="/home/carlos/my-app/src/dog.jpg" owner="Caroline de Oliveira" status="Encontrado" petName="Rex" sexo="Macho" description="Fugiu nas mediações do jardim das oliveiras." />
          <Cards dogPic="/home/carlos/my-app/src/dog2.jpg" owner="José de Alencar" status="Desaparecido" petName="Leão" sexo="Macho" description="Fugiu nas mediações do trevo da bandeira." />
          <Cards dogPic="/home/carlos/my-app/src/dog3.jpg" owner="Mateus Barbosa" status="Desaparecido" petName="Dengosa" sexo="Fêmea" description="Fugiu nas mediações do parque das nações." />
        </Grid>
      </div>
    </div>
  );
}

export default App;