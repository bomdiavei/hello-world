import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import AvatarIcon from './AvatarIcon';
import ButtonComponent from './ButtonComponent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardMedia from '@material-ui/core/CardMedia';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import VerticalMenu from './VerticalMenu';

const useStyles = makeStyles(theme => ({
    media: {
        height: 140,
    },
    parent: {
        minHeight: 845,
        minWidth: 845,
        maxHeight: 870,
        maxWidth: 1840,
        display: "flex",
    },
    picture: {
        justifySelf: "center",
        alignSelf: "center",
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
        minHeight: 500,
        minWidth: 500,
        maxHeight: 870,
        maxWidth: 1340,
        height: "auto",
        width: "auto",
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
    moreInfo: {
        alignSelf: "start",
        maxHeight: 870,
        width: 500,
        display: "flex",
        flexDirection: "column",
    },
    ownerInfo: {
        width: 450,
    },
    person: {
        width: 450,
        display: "flex",
    },
    ownerName: {
        fontWeight: "bold",
        fontSize: "20px",
        margin: theme.spacing(1),
    },
    description: {
        width: 450,
        overflowY: "auto",
        maxHeight: 230,
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        marginBottom: 0,
    },
    buttons: {
        width: 450,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(0),
        marginTop: theme.spacing(0),
        borderBottom: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "rgb(200,200,200)",
        borderTop: "solid",
        borderTopWidth: "1px",
        borderTopColor: "rgb(200,200,200)",
    },
    commentName: {
        fontWeight: "bold",
        fontSize: "14px",
        margin: theme.spacing(1),
    },
    comment: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(2),
        color: "rgb(100,100,100)",
    },
    comments: {
        maxHeight: 360,
        width: 450,
    },
    toComment: {
        width: 500,
    },
    options: {
        display: "flex",
        alignSelf: "flex-start",
        position: "absolute",
        marginLeft: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: 96,
        height: 48,
    },
}));

export default function AlertDialog(props) {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const commentData = props.comments;

    const commentFunction = commentData.map((comment) =>
        //TODO: usar atributo 'key' na lista e atribuí-lo um hash
        <div key={comment.pic}>
            <div className={classes.person}>
                <AvatarIcon src={comment.pic} size="small" />
                <div className={classes.commentName}>{comment.name}</div>
            </div>
            <div className={classes.comment}>
                {comment.comment}
            </div>
        </div>
    );

    const isMissing = () => {
        if ("Desaparecido" === props.status) {
            return <div className={classes.missing}>{props.status}</div>;
        }
        return <div className={classes.found}>{props.status}</div>;
    };

    return (
        <div>
            <CardMedia
                onClick={handleClickOpen}
                className={classes.media}
                image={props.dogPic}
                title="Contemplative Pet"
            />

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
                            {isMissing()}
                            <div className={classes.dogName}>{props.petName}</div>
                            <div>{props.sexo}</div>
                        </div>
                        <img src={props.dogPic} alt="Dog" className={classes.img} />
                    </div>

                    <div className={classes.moreInfo}>

                        <div className={classes.options}>
                            <VerticalMenu />
                            <IconButton color="primary" onClick={handleClose} >
                                <CloseIcon />
                            </IconButton>
                        </div>

                        <DialogContent className={classes.ownerInfo}>
                            <div className={classes.person}>
                                <AvatarIcon src={props.ownerPic} />
                                <div className={classes.ownerName}>{props.owner}</div>
                            </div>
                            <div className={classes.description}>
                                {props.description}
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <div className={classes.buttons}>
                                <ButtonComponent icon="CommentIcon" variant="text" label="Comentar" color="primary" onClick={handleClose} />
                                <ButtonComponent icon="ShareIcon" variant="text" label="Compartilhar" color="primary" onClick={handleClose} />
                            </div>
                        </DialogActions>

                        <DialogContent className={classes.comments}>
                            {commentFunction}
                        </DialogContent>

                        <DialogActions>
                            <TextField
                                className={classes.toComment}
                                variant="outlined"
                                placeholder="Escreva alguma coisa..."
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AvatarIcon src="/broken-image.jpg" size="small" />
                                            {/* TODO: photo of the user */}
                                            {/* TODO: conditional render, only after loggin */}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </DialogActions>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
