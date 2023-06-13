import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Bike Insurance",
      amount: 1650,
      date: new Date(2023, 2, 15),
      location: "Acko Insurance",
    },
    {
      id: "e2",
      title: "Iphone",
      amount: 36500,
      date: new Date(2023, 3, 2),
      location: "A.S Telecom",
    },
    {
      id: "e3",
      title: "TV",
      amount: 19999,
      date: new Date(2023, 4, 4),
      location: "Flipkart",
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 24500,
      date: new Date(2023, 5, 29),
      location: "Chadni Chowk",
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
