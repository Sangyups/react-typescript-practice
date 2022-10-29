import React, { useEffect, useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import { IExpense } from '../../App';

type ItemProps = {
  items: IExpense[];
};

const Expenses = ({ items }: ItemProps) => {
  return (
    <Card className="expenses">
      {items.map((item, i) => {
        return <ExpenseItem key={i} item={item} />;
      })}
    </Card>
  );
};

export default Expenses;
