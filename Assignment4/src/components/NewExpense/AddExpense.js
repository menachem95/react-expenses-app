import "./NewExpense.css";

const AddExpense = (props) => {
  return (
    <button
      onClick={() => {
        props.onSetJSX();
      }}
    >
      Add New Expense
    </button>
  );
};

export default AddExpense;
