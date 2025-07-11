import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  const handleChangeStep = function (e) {
    setStep(+e.target.value);
  };

  const handleReset = function () {
    setCount(0);
    setStep(1);
  };

  return (
    <div>
      <div>
        <input type="range" min={1} max={10} value={step} onChange={handleChangeStep} />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount(c => c - step)}>-</button>
        <input type="text" value={count} onChange={e => setCount(+e.target.value)} />
        <button onClick={() => setCount(c => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0 ? 'Today is ' : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {(count !== 0 || step !== 1) && <button onClick={handleReset}>Reset</button>}
    </div>
  );
}
