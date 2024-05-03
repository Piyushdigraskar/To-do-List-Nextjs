import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>To-Do List</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Todo List</Link>
          </li>
          <li>
            <Link href='/completed'>completed</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
