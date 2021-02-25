import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import { useHistory } from "react-router-dom";  
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Cardu(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const history = useHistory();
  const clicki=()=>{
    history.push(`/products/${props.id}`,props.img);
  }
  return (
      <Grid xs={12} md={4} style={{marginTop:"20px"}}>
      <Container>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} style={{fontSize:"1rem"}}>
            {props.off}
          </Avatar>
        }
      
      />
      <CardMedia
        className={classes.media}
        image={props.img}
        title="sky Bags"
      />
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:"10px"}}>
         {props.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {props.price}
        </Typography>
        <h4 style={{color:"rgb(226, 109, 109)",margin:"10px 0 0 0",cursor:"pointer",textDecoration:"underline"}} onClick={clicki}>ClickMe</h4>
      </CardContent>
         </Card>
         </Container>
         </Grid>
  );
}