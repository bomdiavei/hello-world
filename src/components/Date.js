import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import deLocale from "date-fns/locale/pt-BR";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        marginTop: theme.spacing(1),
    },
}));

export default function MaterialUIPickers() {
    const classes = useStyles();

    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider locale={deLocale} utils={DateFnsUtils}>
            <Grid container className={classes.root}>

                <KeyboardDatePicker
                    invalidDateMessage="Data Inválida"
                    color="secondary"
                    margin="normal"
                    id="date-picker-dialog"
                    label="Data de Nascimento"
                    format="dd/MM/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />

            </Grid>
        </MuiPickersUtilsProvider>
    );
}
