import {createRef, memo} from 'react';

const HabitAddForm = (props) => {
  const inputRef = createRef();

  const onSubmit = e => {
    e.preventDefault();
    const name = inputRef.current.value;

    name && props.onAdd(name);
    inputRef.current.value = '';
  }

  return (
      <form className='add-form' onSubmit={onSubmit}>
        <input
            type="text"
            placeholder='Habit'
            className='add-input'
            ref={inputRef}
        />
        <button className='add-button'>Add</button>
      </form>
  );
}

export default memo(HabitAddForm);