import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing,setIsEditing] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(ExpenseData);
    props.OnAddExpense(ExpenseData);
    setIsEditing(false);
  };

const startEditingHandler = () => {
  setIsEditing(true)
};  

const stopEditingHandler = () => {
  setIsEditing(false)
}

 
return (
    <div className="new-expense">
      {!isEditing && <button onClick = {startEditingHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseDate={SaveExpenseDataHandler} onMyProps = {stopEditingHandler} />}
    </div>
  );
};

export default NewExpenses;
