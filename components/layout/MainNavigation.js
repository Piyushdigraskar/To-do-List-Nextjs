import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>To-Do List</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Todo List</Link>
          </li>
          <li>
            <Link to='/completed'>completed</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
