import {useState, useCallback} from "react";

import './app.css';
import Habits from "./components/habits";
import NavBar from "./components/navBar";

const App = () => {
  const [habits, setHabits] = useState([
    {id: 1, name: 'Reading', count: 0},
    {id: 2, name: 'Running', count: 0},
    {id: 3, name: 'Coding', count: 0}
  ]);

  const handleIncrement = habit => {
    const newHabits = habits.map(item => {
      if (item.id === habit.id) {
        return {...habit, count: habit.count + 1};
      } else {
        return item;
      }
    })

    setHabits(newHabits);
  }

  const handleDecrement = habit => {
    const newHabits = habits.map(item => {
      if (item.id === habit.id) {
        const count = habit.count - 1;

        return {...habit, count: count < 0 ? 0 : count};
      } else {
        return item;
      }
    })

    setHabits(newHabits);
  }

  const handleDelete = habit => {
    const newHabits = habits.filter(item => item.id !== habit.id);

    setHabits(newHabits);
  }

  const handleAdd = name => {
    const newHabits = [
      ...habits,
      {id: Date.now(), name, count: 0}
    ];

    setHabits(newHabits);
  }

  const handleReset = () => {
    const newHabits = habits.map(habit => {
      if (habit.count !== 0) {
        return {...habit, count: 0};
      } else {
        return habit;
      }
    })

    setHabits(newHabits);
  }

  return (
      <>
        <NavBar totalCount={habits.filter(item => item.count > 0).length}/>
        <Habits
            habits={habits}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            handleDelete={handleDelete}
            onAdd={handleAdd}
            onReset={handleReset}
        />
      </>
  );
};

export default App;
