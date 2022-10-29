import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import { Item } from "../../App";

type ItemProps = {
  item: Item;
};

const ExpenseItem = ({ item }: ItemProps) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">${item.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
