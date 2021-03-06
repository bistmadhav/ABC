
import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import {Bar } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from  '../../../../useTransactions';
//import { BarChart } from '@material-ui/icons';
const DetailsCard = ({ title, subheader }) => {
  const { total, chartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Bar data={chartData} />
      </CardContent>
    </Card>
  );
};

export default DetailsCard;




/*
import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';



import useStyles from './styles'
const Details = ({ title }) => {
    const classes = useStyles();
    return (
       <Card className={title === 'Income' ? classes.income: classes.expenses}>
           <CardHeader title={title} />
           <CardContent>
               <Typography variant="h5">$100</Typography>
               

{<Doughnut data="DATA" />}
           </CardContent>
       </Card>
    )
}

export default Details
*/