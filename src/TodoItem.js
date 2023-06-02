import { CompleteIcon } from './completeIcon'
import { DeleteIcon } from './deleteIcon'
import './TodoItem.css'

function TodoItem(props) {
    return (
      <li className='TodoItem'>
        <CompleteIcon 
          completed={props.completed}
          onComplete={props.onComplete}
        />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon 
          onDelete={props.onDelete}
        />
      </li>
    );
  }

  export { TodoItem }