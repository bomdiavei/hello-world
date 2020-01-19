import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonComponent from './ButtonComponent';
import { makeStyles } from '@material-ui/core/styles';
import Date from './Date';
import Radio from './Radio';

const useStyles = makeStyles(theme => ({
    header: {
        textAlign: "center",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
    },
    link: {
        marginTop: theme.spacing(2),
    },
}));

export default function FormDialog() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <ButtonComponent variant="contained" label="Cadastrar" color="secondary" onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.header}>Bem Vindo</DialogTitle>
                <DialogContent>
                    <TextField
                        color="secondary"
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nome"
                        fullWidth
                    />
                    <TextField
                        color="secondary"
                        margin="dense"
                        id="surname"
                        label="Sobrenome"
                        fullWidth
                    />
                    <TextField
                        color="secondary"
                        margin="dense"
                        id="email"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        color="secondary"
                        id="standard-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        margin="dense"
                        fullWidth
                    />
                    <TextField
                        color="secondary"
                        margin="dense"
                        id="city"
                        label="Cidade"
                        fullWidth
                    />
                    <Date />
                    <Radio />
                </DialogContent>
                <DialogActions className={classes.button}>
                    <ButtonComponent variant="text" label="Cancelar" color="default" onClick={handleClose} />
                    <ButtonComponent variant="contained" label="Cadastrar" color="secondary" onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </div>
    );
}
