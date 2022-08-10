import {FaTimes} from 'react-icons/fa'

const List = ({ list, onDelete, onToggle}) => {
  return (
    <div className={`list ${list.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(list.id)}>
      <h3 style={{fontSize: '1rem', letterSpacing: '2px'}}>{list.text} <FaTimes style={{color: 'red'}} onClick={() => onDelete(list.id)}/></h3>
      <p>{list.day}</p>
    </div>
  )
}

export default List
