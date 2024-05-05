import Card from '../ui/Card';
import classes from './CompTodoItem.module.css';

function CompTodoItem(props) {
  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.todos}</h3>
        </div>
      </Card>
    </li>
  );
}

export default CompTodoItem;
