import { useState } from 'react';

const currentDate = new Date();
const buyDateString = currentDate.toISOString().slice(0, 10);

export default function App() {
  const [item, setItem] = useState('');
  const [buyDate, setBuyDate] = useState(buyDateString);

  return (
    <div className="App">
      <header>
        <h1>Grocery List</h1>
      </header>
      <main>
        <h2>Welcome back! Today's date is {currentDate.toDateString()}.</h2>
        <form className="controls">
          <label>
            Item:{' '}
            <input
              type="text"
              value={item}
              placeholder="item"
              onChange={(e) => setItem(e.target.value)}
            />
          </label>
          <label>
            Buy Date:{' '}
            <input
              type="date"
              value={buyDate}
              onChange={(e) => setBuyDate(e.target.value)}
            />
          </label>
          <button>Add Item</button>
        </form>
        <section className="list-items"></section>
      </main>
      <footer>-codo by jojo, 2022</footer>
    </div>
  );
}
