import {memo} from 'react';

const Habit = (props) => {
  const {name, count} = props.habit;

  return (
      <li className='habit'>
        <span className='habit-name'>{name}</span>
        <span className='habit-count'>{count}</span>
        <button
            className='habit-button habit-increase'
            onClick={() => props.handleIncrement(props.habit)}
        >
          <i className="fas fa-plus-square"/>
        </button>
        <button
            className='habit-button habit-decrease'
            onClick={() => props.handleDecrement(props.habit)}
        >
          <i className="fas fa-minus-square"/>
        </button>
        <button
            className='habit-button habit-delete'
            onClick={() => props.handleDelete(props.habit)}
        >
          <i className="fas fa-trash"/>
        </button>
      </li>
  );
};

export default memo(Habit);