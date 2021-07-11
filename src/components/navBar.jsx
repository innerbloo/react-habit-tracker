import {memo} from 'react';

const NavBar = (props) => {
  return (
      <div className='navbar'>
        <i className='navbar-logo fas fa-leaf'/>
        <span>Habit Tracker</span>
        <span className='navbar-count'>{props.totalCount}</span>
      </div>
  );
};

export default memo(NavBar);