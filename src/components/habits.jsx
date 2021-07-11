import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

const Habits = (props) => {
  return (
      <div className='habits'>
        <HabitAddForm onAdd={props.onAdd}/>
        <ul>
          {props.habits.map(habit =>
              <Habit
                  key={habit.id}
                  habit={habit}
                  handleIncrement={props.handleIncrement}
                  handleDecrement={props.handleDecrement}
                  handleDelete={props.handleDelete}
              />
          )}
        </ul>
        <button className='habits-reset' onClick={props.onReset}>Reset All</button>
      </div>
  );
};

export default Habits;