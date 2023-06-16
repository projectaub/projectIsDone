


const Todo = ({todo, onRemoveTodo , checkTodo})=>{
  

  const squareStyle = {
    width: "225px",
    height: "180px",
    border: "1px solid green",
    borderRadius: "10px" ,
  };

   
    return (<div key={todo.id} style={squareStyle}>{todo.title}<br/>{todo.word} 
    <button className='delete-btn' onClick={() => onRemoveTodo(todo.id)}>삭제</button>
  {todo.isDone?<button className='complete-btn' onClick={() => checkTodo(todo.id)}>취소</button> :
    <button className='complete-btn' onClick={() => checkTodo(todo.id)}>완료</button>
  }</div>)

  }
  
export default Todo;