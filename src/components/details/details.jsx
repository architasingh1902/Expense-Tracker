import React from 'react'
import {Card,CardHeader, CardContent, Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2';
import useStyles from './styles.js';
import useTransactions from '../../useTransactions.js';
const Details = ({title}) => {
  const classes=useStyles();
  const {total,chartData}=useTransactions(title);
  return (
    <Card className={ title==='Income' ? classes.income: classes.expense}> 
      <CardHeader title={title} />
      <CardContent>
            <Typography variant="h5">${total}</Typography>
            <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
}

export default Details