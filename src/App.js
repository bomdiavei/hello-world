import React from 'react';
import './App.css';

import 'typeface-roboto';
import AppBarNotLoggedIn from './components/AppBarNotLoggedIn';
// import AppBarLoggedIn from './components/AppBarLoggedIn';
import InputLabelSimple from './components/InputLabelSimple';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextFieldSimple from './components/TextFieldSimple';
import MenuItem from '@material-ui/core/MenuItem';
import Cards from './components/Cards';
import Grid from '@material-ui/core/Grid';


function App() {

  const [sex, setSex] = React.useState('');

  const handleChangeSex = event => {
    setSex(event.target.value);
  };

  const sexData = [
    {
      name: "feminino",
      value: "f"
    },
    {
      name: "masculino",
      value: "m"
    },
    {
      name: "ambos",
      value: ""
    }];

  const sexFunction = sexData.map((sex) =>
    <MenuItem key={sex.value} value={sex.value}>{sex.name}</MenuItem>
  );

  const [status, setStatus] = React.useState('');

  const handleChangeStatus = event => {
    setStatus(event.target.value);
  };

  const statusData = [
    {
      name: "encontrado",
      value: "e"
    },
    {
      name: "desaparecido",
      value: "d"
    },
    {
      name: "ambos",
      value: ""
    }];

  const statusFunction = statusData.map((status) =>
    <MenuItem key={status.value} value={status.value}>{status.name}</MenuItem>
  );

  return (
    <div className="App">
      <div>
        <AppBarNotLoggedIn />
        {/* <AppBarLoggedIn/> */}
      </div>

      {/* filtro */}
      <Grid>
        <Card>
          <CardContent>
            <TextFieldSimple label="Nome" />
          </CardContent>
          <InputLabelSimple inputLabelValue="Sexo" onChange={handleChangeSex} value={sex} dataFunction={sexFunction} />
          <InputLabelSimple inputLabelValue="Status" onChange={handleChangeStatus} value={status} dataFunction={statusFunction} />
        </Card>
      </Grid>

      {/* cartoes */}
      <Grid>
        <Cards petName="Rex" description="Fugiu nas mediações do jardim das oliveiras." />
      </Grid>
    </div>
  );
}

export default App;

// Mas basicamente vc vai precisa de dois <Grid />
// Uma pro form e outros pros cards
// No grid dos cards usa o flexbox do css
// Com as propriedades
// display: 'flex'
// flexWrap: 'wrap'
// justifyContente: 'space-between'
// Dai define um tamanho pros cards
// De uns 200 a 300px
// E ainda pegando todo mundo usa do flexbox tbm