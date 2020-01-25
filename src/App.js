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

  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../public', false, /\.(png|jpe?g|svg)$/));

  const comments = [
    {
        pic: images[4],
        name: "César Torres",
        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        // comment: ""
    },
    {
        pic: images[5],
        name: "Rafaela Ferreira",
        comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        // comment: ""
    },
    {
        pic: images[6],
        name: "Leonardo Almeida",
        comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
        // comment: ""
    }];

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
          <Cards comments={comments} dogPic={process.env.PUBLIC_URL + images[7]} ownerPic={process.env.PUBLIC_URL + images[0]} owner="Caroline de Oliveira" status="Encontrado" petName="Rex" sexo="Macho" description="Fugiu nas mediações do jardim das oliveiras." />
          <Cards comments={comments} dogPic={process.env.PUBLIC_URL + images[8]} ownerPic={process.env.PUBLIC_URL + images[1]} owner="José de Alencar" status="Desaparecido" petName="Leão" sexo="Macho" description="Fugiu nas mediações do trevo da bandeira." />
          <Cards comments={comments} dogPic={process.env.PUBLIC_URL + images[9]} ownerPic={process.env.PUBLIC_URL + images[2]} owner="Mateus Barbosa" status="Desaparecido" petName="Dengosa" sexo="Fêmea" description="Fugiu nas mediações do parque das nações." />
        </Grid>
      </div>
    </div>
  );
}

export default App;