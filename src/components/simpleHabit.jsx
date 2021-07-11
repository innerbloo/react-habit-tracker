import { useState } from 'react';

const SimpleHabit = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{count}</span>
        <button
            className="habit-button habit-increase"
            onClick={handleIncrement}
        >
          <i className="fas fa-plus-square"/>
        </button>
      </li>
  );
};

export default SimpleHabit;