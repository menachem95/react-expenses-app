import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";


function Exspenses(props) {
  const [year, setDefaultYaer] = useState("2020");
  
 const ChooseYearHandler = (yearSelected)=>{
    console.log(yearSelected);
    setDefaultYaer(yearSelected);
 };


  return (
    <div>
      
      <Card className="expenses">
      <ExpensesFilter defaultYear={year} onChooseYear={ChooseYearHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    </div>
    
  );
}

export default Exspenses;
