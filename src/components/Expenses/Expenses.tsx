import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import { Item } from "../../App";

type ItemProps = {
  items: Item[];
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
