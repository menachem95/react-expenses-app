import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import AddExpense from "./AddExpense";
import "./NewExpense.css";

const NewExpense = (props) => {
  

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const setJSXHandler = ()=> {
    setJSX(formClose)
  }

  const formOpen = (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onSetJSX={setJSXHandler}/>
    </div>
  );

  const formClose = (
    <div className="new-expense">
      <button
        onClick={() => {
          setJSX(formOpen);
        }}
      >
        Add New Expense
      </button>
    </div>
  );

  const [returnJSX, setJSX] = useState(formClose);

  return returnJSX;
};

export default NewExpense;
