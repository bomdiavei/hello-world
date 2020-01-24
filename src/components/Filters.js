import React from 'react';
import InputLabelSimple from './InputLabelSimple';
import SearchTextField from './SearchTextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 403,
        height: 250,
    },
    grid: {
        '& > *': {
          margin: theme.spacing(2),
        },
    },
}));

export default function Filters(props) {
    const classes = useStyles();

    const sexData = [
        {
            name: "fêmea",
            value: "f"
        },
        {
            name: "macho",
            value: "m"
        },
        {
            name: "ambos",
            value: ""
        }];

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

    return (
        <Grid className={classes.grid}>
            <Card className={classes.root}>
                <CardContent>
                    <SearchTextField label="Nome" />
                </CardContent>
                <InputLabelSimple inputLabelValue="Sexo" valueData={sexData} />
                <InputLabelSimple inputLabelValue="Status" valueData={statusData} />
            </Card>
        </Grid>
    );
}