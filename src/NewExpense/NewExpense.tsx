import React from 'react';
import { IExpense } from '../App';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

export interface INewExpense {
  title: string;
  amount: number;
  date: Date;
}

type NewExpenseProps = {
  onAddExpense: (savedExpense: IExpense) => void;
};

const NewExpense = ({ onAddExpense }: NewExpenseProps) => {
  const onSaveNewExpense = (newExpense: INewExpense) => {
    const savedExpense = {
      ...newExpense,
      id: Date.now().toString(),
    };
    onAddExpense(savedExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={onSaveNewExpense} />
    </div>
  );
};

export default NewExpense;
