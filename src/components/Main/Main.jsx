import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form.jsx'
import useStyles from './styles.js'
import List from './List/List.jsx'
import { ExpenseTrackerContext } from '../../context/context.js';
const Main = () => {
  const classes=useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker"   />
      <CardContent>
        <Typography align="center" variant='h5'>Total Balance ${balance}</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px', textAlign: 'center' }}>
  Expense Analysis
</Typography>

        <Divider>

        </Divider>
        <Form/>
      </CardContent>
      <CardContent className={classes.cardContent}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List/>
            </Grid>
          </Grid>
      </CardContent>
    </Card>

  );
}

export default Main