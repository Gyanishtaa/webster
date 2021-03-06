import React from 'react';
import { Card, CardHeader, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { deleteWebpage } from '../../../actions/webpages';
import useStyles from './styles';





const Webpage = ({ webpage, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Typography className={classes.overlay3} 
        >https://{webpage.domainname}.webster.com</Typography>

      <CardMedia  className={classes.media} image={webpage.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={webpage.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{webpage.creator}</Typography>
        <Typography variant="body2">{moment(webpage.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(webpage._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{webpage.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{webpage.title}</Typography>
      <CardContent>
       
        
      
        <Typography variant="body2" color="textPrimary" component="p">{webpage.text}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        
        
        <Button size="small" color="primary" onClick={() => dispatch(deleteWebpage(webpage._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Webpage;
