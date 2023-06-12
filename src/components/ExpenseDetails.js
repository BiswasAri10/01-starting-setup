import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <div className="expense-details__title">{props.title}</div>
      <div className="expense-details__amount">Rs.{props.amount}</div>
      <div className="expense-details__location">{props.location}</div> 
    </div>
  );
}

export default ExpenseDetails;
