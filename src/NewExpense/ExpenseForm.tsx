import React, { useState } from 'react';

import './ExpenseForm.css';
import { INewExpense } from './NewExpense';

type ExpenseFormProps = {
  onSaveNewExpense: (newExpense: INewExpense) => void;
};

const ExpenseForm = ({ onSaveNewExpense }: ExpenseFormProps) => {
  const initialInput = {
    inputTitle: '',
    inputAmount: '0.1',
    inputDate: new Date().toISOString().slice(0, 10),
  };
  const [userInput, setUserInput] = useState(initialInput);

  const onTitleChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputTitle: e.target.value,
      };
    });
  };
  const onAmountChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputAmount: e.target.value,
      };
    });
  };
  const onDateChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    console.log(e.target.value);
    setUserInput((prevState) => {
      return {
        ...prevState,
        inputDate: e.target.value,
      };
    });
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const expenseInput = {
      title: userInput.inputTitle,
      amount: +userInput.inputAmount,
      date: new Date(userInput.inputDate),
    };
    onSaveNewExpense(expenseInput);
    setUserInput(initialInput);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.inputTitle}
            onChange={onTitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.inputAmount}
            onChange={onAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.inputDate}
            onChange={onDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
