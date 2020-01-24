import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DogPic from '../dog.jpg'
import { makeStyles } from '@material-ui/core/styles';
import AvatarIcon from './AvatarIcon';
import ButtonComponent from './ButtonComponent';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
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

    const commentData = [
        {
            label: "C",
            name: "César Torres",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            // comment: ""
        },
        {
            label: "R",
            name: "Rafaela Ferreira",
            comment: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            // comment: ""
        },
        {
            label: "L",
            name: "Leonardo Almeida",
            comment: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            // comment: ""
        }];

    const commentFunction = commentData.map((comment) =>
    //TODO: usar atributo 'key' na lista e atribuí-lo um hash
        <div key={comment.label}>
            <div className={classes.person}>
                <AvatarIcon label={comment.label} size="small" />
                <div className={classes.commentName}>{comment.name}</div>
            </div>
            <div className={classes.comment}>
                {comment.comment}
            </div>
        </div>
    );

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
                        <img src={DogPic} alt="Dog" className={classes.img} />                        
                    </div>

                    <div className={classes.moreInfo}>
                        <DialogContent className={classes.ownerInfo}>
                            <div className={classes.person}>
                                <AvatarIcon label="C" />
                                <div className={classes.ownerName}>Caroline de Oliveira</div>
                            </div>
                            <div className={classes.description}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                                            <AvatarIcon label="C" size="small" />
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
