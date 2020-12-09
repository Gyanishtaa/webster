import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Webpage from './Webpage/Webpage';
import useStyles from './styles';

const Webpages = ({ setCurrentId }) => {
  const webpages = useSelector((state) => state.webpages);
  const classes = useStyles();

  return (
    !webpages.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {webpages.map((webpage) => (
          <Grid key={webpage._id} item xs={12} sm={12} md={16}>
            <Webpage webpage={webpage} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Webpages;
