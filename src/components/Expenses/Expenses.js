import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const selectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => { return expense.date.getFullYear().toString() === year}
  );

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectYear={selectYearHandler} year={year} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
