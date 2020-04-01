import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
});

const CardComponent = ({name, occupation, status, birthday, img}) => {
  const classes = useStyles();

  console.log(name)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Name: {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Occupation: {occupation}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Birthday: {birthday}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent