import TodoItem from "./TodoItems";

function TodoList(props){
    return(
    <div>
        {props.todos.map(todo =>
         <TodoItem key={todo.id}
          id={todo.id} 
          title={todo.title} 
        />)}
    </div>
    )
}
export default TodoList;