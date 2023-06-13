import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <div className="expense-item__title">{props.title}</div>
      <div className="expense-item__location">{props.location}</div> 
      <div className="expense-item__price">Rs.{props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
