import Header from './Components/Header';
import { useState } from "react"
import Lists from './Components/Lists';
import AddList from './Components/AddList';
import './App.css';
import List from './Components/List';

function App() {
  const [showAddList, setShowAddList] = useState(false)
  const [lists, setLists] =useState([
    {
        id: 1,
        text: 'Learning React',
        day: 'Tuesday 8th 2022',
        reminder: true,
    },
    {
        id: 2,
        text: 'Eating Pizza',
        day: 'wednesday 9th 2022',
        reminder: false,
    },
    {
        id: 3,
        text: 'Goofing around with friends',
        day: 'Thursday 10th 2022',
        reminder: true,
    },
    {
        id: 4,
        text: 'Prasing God in Church',
        day: 'Sunday 13th 2022',
        reminder: false,
    }
])

// Add List
const addList = (list) => {
  const id = Math.floor(Math.random() * 1000) + 1
  const newList = {id, ...list}
  setLists([...lists, newList])
}

  // Toggle Reminder
  const toggleReminder = (id) =>{
    setLists(lists.map((list) => list.id === id ? {...list, reminder: !list.reminder} : list))
  }

  // Delete Tasks
    const deleteTasks = (id) =>{
      setLists(lists.filter((list) => list.id !== id))
    }

  return (
    <div className="container">
      <Header title='To-Do List' onAdd={() => setShowAddList(!showAddList)} showAdd={showAddList}/>
      {showAddList && <AddList onAdd={addList}/>}
      {lists.length > 0 ? <Lists lists={lists} onDelete={deleteTasks} onToggle={toggleReminder}/> : 'Enter a to-do list'}
    </div>
  );
}

export default App;
