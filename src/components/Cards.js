import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VerticalMenu from './VerticalMenu';
import DogPic from '../dog.jpg'

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        maxHeight: 317,
    },
    media: {
        height: 140,
    },
    description: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    parent: {
        position: "relative",
    },
    missing: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 100,
        position: "absolute",
        backgroundImage: "linear-gradient(rgba(255,0,0,1), rgba(255,0,0,0));",
    },
    found: {
        fontWeight: "bold",
        color: "white",
        fontSize: 14,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 100,
        position: "absolute",
        backgroundImage: "linear-gradient(rgba(0,255,0,1), rgba(0,255,0,0));",
    },
    content: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default function Cards(props) {
    const classes = useStyles();

    const isMissing = () => {
        if ("Desaparecido" === props.status) {
            return <div className={classes.missing}>{props.status}</div>;
        }
        return <div className={classes.found}>{props.status}</div>;
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <div className={classes.parent}>
                    {isMissing()}
                    <CardMedia
                        className={classes.media}
                        image={DogPic}
                        title="Contemplative Pet"
                    />
                </div>
            </CardActionArea>
            <CardContent>
                <div className={classes.content}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.petName}
                    </Typography>
                    <VerticalMenu />
                </div>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Compartilhar
                </Button>
                <Button size="small" color="primary">
                    Saiba Mais
                </Button>
            </CardActions>
        </Card>
    );
}