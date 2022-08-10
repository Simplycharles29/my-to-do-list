import List from "./List"

const Lists = ({lists, onDelete, onToggle}) => {
  return (
    <>
    {lists.map((list) => (
      <List key={list.id} list={list} onDelete={onDelete} onToggle={onToggle}/>
       ))}
    </>
  )
}

export default Lists
