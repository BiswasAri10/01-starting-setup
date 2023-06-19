import React, { useState } from "react";
import NewExpense from "./components/New Expense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Bike Insurance",
    amount: 1650,
    date: new Date(2023, 2, 15),
    location: "Acko Insurance",
  },
  {
    id: "e2",
    title: "Iphone",
    amount: 36500,
    date: new Date(2023, 3, 2),
    location: "A.S Telecom",
  },
  {
    id: "e3",
    title: "TV",
    amount: 19999,
    date: new Date(2023, 4, 4),
    location: "Flipkart",
  },
  {
    id: "e4",
    title: "Laptop",
    amount: 24500,
    date: new Date(2023, 5, 29),
    location: "Chadni Chowk",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  /*return React.createElement(
    'div', 
    {}, 
    React.createElement('h2', {}, "Expense Tracker"),
    React.createElement(Expenses, {items:expenses} )
    );*/

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
