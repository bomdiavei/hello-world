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
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import pink from "@material-ui/core/colors/pink";

const materialTheme = createMuiTheme({
    palette: {
        primary: pink,
    },
});

const useStyles = makeStyles(theme => ({
    date: {
        display: "flex",
        justifyContent: "flex-start",
        marginTop: theme.spacing(1),
    },
}));

export default function MaterialUIPickers() {
    const classes = useStyles();

    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider color="secondary" locale={deLocale} utils={DateFnsUtils}>
            <Grid container className={classes.date}>

                <ThemeProvider theme={materialTheme}>
                    <KeyboardDatePicker
                        autoOk
                        disableFuture
                        minDateMessage="Data Inválida"
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
                            color: 'secondary',
                        }}
                        DialogProps={{
                            'cancelLabel': 'cancelar',
                        }}
                    />
                </ThemeProvider>

            </Grid>
        </MuiPickersUtilsProvider>
    );
}
