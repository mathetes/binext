import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./styles.scss";
import Scripture from "../components/scripture/scripture";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>Left Sidebar</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h1 className="title">Главная странца</h1>
            <Scripture />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Right Sidebar</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
