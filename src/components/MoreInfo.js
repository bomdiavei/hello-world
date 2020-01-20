import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DogPic from '../dog.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AvatarIcon from './AvatarIcon';
import ButtonComponent from './ButtonComponent';

const useStyles = makeStyles(theme => ({
    picture: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    dogInfo: {
        width: 345,
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.25)",
        borderRadius: "10px 10px 0px 0px",
        color: "white",
    },
    dogName: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: "20px",
    },
    img: {
        display: "block",
        margin: "auto",
    },
    missing: {
        borderRadius: "10px 10px 0px 0px",
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 345,
        backgroundImage: "linear-gradient(rgba(255,0,0,1), rgba(255,0,0,0));",
    },
    found: {
        borderRadius: "10px 10px 0px 0px",
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 345,
        backgroundImage: "linear-gradient(rgba(0,255,0,1), rgba(0,255,0,0));",
    },
    parent: {
        display: "flex",
    },
    moreInfo: {
        maxWidth: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    person: {
        display: "flex",
        alignItems: "center",
    },
    ownerName: {
        fontWeight: "bold",
        fontSize: "20px",
        margin: theme.spacing(1),
    },
    description: {
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        marginBottom: 0,
        borderBottom: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "rgb(200,200,200)",
    },
    buttons: {
        width: 312,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: theme.spacing(2),
        marginBottom: 0,
        borderBottom: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "rgb(200,200,200)",
    },
    commentName: {
        fontWeight: "bold",
        fontSize: "14px",
        margin: theme.spacing(1),
    },
    comment: {
        marginLeft: theme.spacing(2),
        color: "rgb(100,100,100)",
    },
}));

export default function AlertDialog() {
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
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open alert dialog
            </Button>
            <Dialog
                maxWidth="xl"
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className={classes.parent}>
                    <div className={classes.picture}>
                        <div className={classes.dogInfo}>
                            <div className={classes.found}>Encontrado</div>
                            <div className={classes.dogName}>Rex</div>
                            <div>Macho</div>
                        </div>
                        <div>
                            <img src={DogPic} alt="Dog" className={classes.img} />
                        </div>
                    </div>
                    <div className={classes.moreInfo}>
                        <DialogContent>
                            <div className={classes.person}>
                                <AvatarIcon label="C" />
                                <div className={classes.ownerName}>Caroline de Oliveira</div>
                            </div>
                            <div className={classes.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <div className={classes.buttons}>
                                    <ButtonComponent icon="CommentIcon" variant="text" label="Comentar" color="primary" onClick={handleClose} />
                                    <ButtonComponent icon="ShareIcon" variant="text" label="Compartilhar" color="primary" onClick={handleClose} />
                            </div>
                        </DialogActions>
                        <DialogContent className={classes.comments}>

                            <div className={classes.person}>
                                <AvatarIcon label="C" size="small" />
                                <div className={classes.commentName}>César Torres</div>
                            </div>
                            <div className={classes.comment}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>

                        </DialogContent>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
