import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart"

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const myFirstFunctionFilterForYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses = {myFirstFunctionFilterForYear}/>
        <ExpensesList test = {myFirstFunctionFilterForYear} />
      </Card>
    </div>
  );
}
export default Expenses;
