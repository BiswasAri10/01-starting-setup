import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </Card>
  );
}
export default ExpenseItem;
