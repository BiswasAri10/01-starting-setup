import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./Expenseslist";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear;
    });
    setFilteredExpenses(filteredExpenses);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
