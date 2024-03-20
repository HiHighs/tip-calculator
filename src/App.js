import './app.css';
import { useState } from 'react';

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourPerc, setYourPerc] = useState(0);
  const [friendPerc, setFriendPerc] = useState(0);

  function handleReset() {
    setBill(0);
    setYourPerc(0);
    setFriendPerc(0);
  }

  return (
    <>
      <h3>Tip Calculator</h3>

      <Bill bill={bill} onSetBill={setBill} />
      <Percentage percentage={yourPerc} onSetPercentage={setYourPerc}>
        How did you like the service?
      </Percentage>
      <Percentage percentage={friendPerc} onSetPercentage={setFriendPerc}>
        How did your friend like the service?
      </Percentage>

      <Output bill={bill} yourPerc={yourPerc} friendPerc={friendPerc} />

      <Reset onReset={handleReset} />
    </>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor='bill'>How much was the bill? </label>
      <input
        name='bill'
        type='number'
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Percentage({ percentage, onSetPercentage, children }) {
  return (
    <div>
      <label htmlFor='percentage'>{children} </label>
      <select
        name='percentage'
        value={percentage}
        onChange={(e) => onSetPercentage(Number(e.target.value))}
      >
        <option value='0'>Dissatisfied (0%)</option>
        <option value='5'>Dissatisfied (5%)</option>
        <option value='10'>Dissatisfied (10%)</option>
        <option value='20'>Dissatisfied (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, yourPerc, friendPerc }) {
  if (bill === 0 && yourPerc === 0 && friendPerc === 0) return;

  const tip = (bill / 100) * (yourPerc + friendPerc);
  const total = bill + tip;

  return (
    <h2>
      You pay ${total} (${bill} + ${tip} tip)
    </h2>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
