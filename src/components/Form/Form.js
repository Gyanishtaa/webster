import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createWebpage, updateWebpage } from '../../actions/webpages';

const Form = ({ currentId, setCurrentId }) => {
  const [webpageData, setWebpageData] = useState({ domainname: '', creator: '', title: '', text: '', tags: '', selectedFile: '' });
  const webpage = useSelector((state) => (currentId ? state.webpages.find((text) => text._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (webpage) setWebpageData(webpage);
  }, [webpage]);

const clear = () => {
    setCurrentId(0);
    setWebpageData({ domainname: '', creator: '', title: '', text: '', tags: '', selectedFile: '', addedImage: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createWebpage(webpageData));
      clear();
    } else {
      dispatch(updateWebpage(currentId, webpageData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${webpage.title}"` : 'Creating a Website'}</Typography>
        <TextField name="domainname" variant="outlined" label="Domain Name" fullWidth value={webpageData.domainname} onChange={(e) => setWebpageData({ ...webpageData, domainname: e.target.value })} />
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={webpageData.creator} onChange={(e) => setWebpageData({ ...webpageData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={webpageData.title} onChange={(e) => setWebpageData({ ...webpageData, title: e.target.value })} />
        <TextField name="text" variant="outlined" label="Text" fullWidth multiline rows={4} value={webpageData.text} onChange={(e) => setWebpageData({ ...webpageData, text: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={webpageData.tags} onChange={(e) => setWebpageData({ ...webpageData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setWebpageData({ ...webpageData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add Page</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
