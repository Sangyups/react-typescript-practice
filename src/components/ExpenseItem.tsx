import "./ExpenseItem.css";

function ExpenseItem() {
  const date = new Date();
  return (
    <div className="expense-item">
      <div>{`${date.getFullYear()} ${
        date.getMonth() + 1
      } ${date.getDate()}`}</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$220.14</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
