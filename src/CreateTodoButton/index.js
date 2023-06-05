import './CreateTodoButton.css'

function CreateTodoButton() {
  return (
    <button className="CreateTodoButton" onClick={
      (event) => {
        console.log("le diste clic")
        console.log(event.target)
      }
    }>+</button>
  )
}

export { CreateTodoButton };