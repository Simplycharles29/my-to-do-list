import { useState } from "react"

const AddList = ({ onAdd }) => {

    const[text, setText] = useState('')
    const[day, setDay] = useState('')
    const[reminder, setReminder] = useState(false)

    const onSubmit = (e)  =>{
        e.preventDefault()


        if(!text) {
            alert('Please Add a List')
            return
        }

        onAdd({ text, day, reminder})

        setText('');
        setDay('');
        setReminder(false);
    }
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="List">Add List</label>
        <input type="text"  placeholder="Add List" value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label htmlFor="Day & Time">Add Day & Time</label>
        <input type="text"  placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>
      <div className="checked-control">
        <label htmlFor="Reminder">Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>
      <div className="button-control">
        <input type="submit" value='Save List' className="btn-block"/>
      </div>
    </form>
  )
}

export default AddList
