import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2023, 2, 15);
    const expenseTitle = 'Bike Insurance';
    const expenseAmount = 1650; 
    const expenseLocation = 'Acko Insurance';
  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className="expense-item__location">{expenseLocation}</div>
        <div className='expense-item__price'>Rs.{expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
