import React from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
  const data = props.data.map((obj) => {
    return (
      <div key={obj.id}>
        <ExpenseItem date={obj.date} title={obj.title} amount={obj.amount} />
      </div>
    );
  });

  return <Card className="expenses">{data}</Card>;
};

export default Expenses;
