import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(year);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYearHandler} year={year} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
