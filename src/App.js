import React from 'react';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';
import AppBarNotLoggedIn from './components/AppBarNotLoggedIn';
// import AppBarLoggedIn from './components/AppBarLoggedIn';
import Cards from './components/Cards';
import Grid from '@material-ui/core/Grid';
import Filters from './components/Filters'
import MoreInfo from './components/MoreInfo';

const useStyles = makeStyles(theme => ({
  cards: {
    '& > *': {
      margin: theme.spacing(2),
    },
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
          <MoreInfo />
          <Cards status="Encontrado" petName="Rex" description="Fugiu nas mediações do jardim das oliveiras." />
          <Cards status="Desaparecido" petName="Leão" description="Fugiu nas mediações do trevo da bandeira." />
        </Grid>
      </div>
    </div>
  );
}

export default App;