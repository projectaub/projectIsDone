
const Todo = ({todo, onRemoveTodo , checkTodo})=>{
   
    return (<div key={todo.id}>{todo.title}-{todo.word} 
    <button className='delete-btn' onClick={() => onRemoveTodo(todo.id)}>삭제</button>
  {todo.isDone?<button className='complete-btn' onClick={() => checkTodo(todo.id)}>취소</button> :
    <button className='complete-btn' onClick={() => checkTodo(todo.id)}>완료</button>
  }</div>)

  }
  
export default Todo;