import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYearHandler} year={year} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
