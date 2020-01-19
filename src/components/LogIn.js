import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Link from '@material-ui/core/Link';
import DialogTitle from '@material-ui/core/DialogTitle';
import ButtonComponent from './ButtonComponent';
import { makeStyles } from '@material-ui/core/styles';

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
            <ButtonComponent variant="contained" label="Entrar" color="primary" onClick={handleClickOpen} />
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className={classes.header}>Bem Vindo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                    <TextField
                        id="standard-password-input"
                        label="Senha"
                        type="password"
                        autoComplete="current-password"
                        margin="dense"
                        fullWidth
                    />
                    <Link 
                        className={classes.link}
                        component="button"
                        variant="body2"
                        onClick={() => {
                            console.info("I'm a button.");
                        }}
                    >
                        Esqueci minha senha
                    </Link>
                </DialogContent>
                <DialogActions className={classes.button}>
                    <ButtonComponent variant="text" label="Cancelar" color="default" onClick={handleClose} />
                    <ButtonComponent variant="contained" label="Entrar" color="primary" onClick={handleClose} />
                </DialogActions>
            </Dialog>
        </div>
    );
}
