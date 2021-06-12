import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = (
    <h2 className="expenses-list__fallback">No Expenses Found</h2>
  );

  if (props.expenses.length > 0) {
    expensesContent = props.expenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      );
    });
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;
