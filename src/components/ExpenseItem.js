import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from './ExpenseDetails';
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-details">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </div>
  );
}
export default ExpenseItem;
