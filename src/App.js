import { useState } from 'react';
import './App.css';
import Todo from './component/Todo';


function App() {
  const [todos,setTodos] = useState([
    {id: 1 ,title : "리액트 공부하기" ,word: "리액트 기초를 공부해봅시다.",isDone: false},
    {id: 2 ,title : "리액트 공부하기" ,word: "리액트 기초를 공부해봅시다.",isDone: true}
  ])

  
  const [title,setTitle] = useState("")
  const [word, setWord] = useState("")



   

// 제목 바꾸기
  const titleChangeButtonHandler = (event)=>{
    setTitle(event.target.value);
  }
// 내용 바꾸기
  const wordChangeButtonHandler = (event)=>{
    setWord(event.target.value);
  }

// 바꾼내용 추가하기
  const clickAddButtonHandler = () => {
    const newtoDoList = {
      id: todos.length +1,
      title,
      word,
      isDone: false   
    }

    setTodos([...todos, newtoDoList])
  }

// 지우기 (안보이게하기)
  const onRemoveTodo = (id) =>{
    const reMovetoDoList = todos.filter(todos => todos.id !== id)
    setTodos(reMovetoDoList)
   }
   
   
  

// 불리언값 변경
  const checkTodo = (id) => {
  setTodos(todos => todos.map(todo =>
      (todo.id === id? {...todo, isDone: !todo.isDone} : todo)
    )
  )
};

  // const checkTodo = (id) => {
  //   let newToDos = todos 
  //   for (let i=0;i<newToDos.length;i++){
  //     console.log("12",newToDos)
  //     if(newToDos[i].id===id){
  //       newToDos[i].isDone =!newToDos[i].isDone
  //     } 
  //    }
  //    console.log(newToDos)
  //    setTodos([...newToDos])
  // };
 
//  랜더링 하는곳
  return (
    <div className='max' >
      <div >My Todo List</div>
      <div >React</div>
      <div>제목<input value={title} onChange={titleChangeButtonHandler}/> 내용 <input value={word} onChange={wordChangeButtonHandler}/> <button onClick={clickAddButtonHandler} >추가하기</button></div> 
      <div className='title-state'>Wortking..</div>
      <div>
      {todos.filter((todo) => !todo.isDone)
      .map((progressTodo) => 
        (
          <Todo 
          todo={progressTodo} 
          key={progressTodo.id} 
          onRemoveTodo={onRemoveTodo} 
          checkTodo={checkTodo}
      />
      ))


    }
      </div>
      <div className='title-state'>Done..!</div>
      <div>
      {todos.filter((todo) => todo.isDone)
                .map((doneTodo) => (
                    <Todo 
                        todo={doneTodo} 
                        key={doneTodo.id} 
                        onRemoveTodo={onRemoveTodo} 
                        checkTodo={checkTodo}
                />
                ))
            }
      </div>
    </div>
  );
}



export default App;



