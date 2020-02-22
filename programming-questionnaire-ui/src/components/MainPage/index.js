import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from 'components/common/Table';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  main: {
    display: 'flex',
    padding: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const MainPage = ({ username }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Programming quizes
          </Typography>
          <Typography variant="h6">{username}</Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <Table />
      </div>
    </div>
  );
};

export default MainPage;