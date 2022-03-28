import './App.css';
import TodoForm from './Components/TodoForm';
import {useEffect, useState} from "react";
import TodoItems from "./Components/TodoItems";
import Modal from "./Components/Modal";

function App() {
    const [todos,setTodos]=useState([]);
    const [modal,setModal]=useState(false);

    useEffect(()=>{
        if(todos){
            const data=JSON.parse(localStorage.getItem('data'))
            setTodos(data)
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(todos))
    },[todos])
    const onAdd=(inputText)=>{
        const newItem={
            id:Math.random(),
            text:inputText,
            isCompleted:false
        }
        setTodos([newItem,...todos])
    }
    const onChange=(item)=>{
        const newTodos=todos.map((todo)=>{
            return todo.id===item.id ? item : todo
        })
        setTodos(newTodos)
    }
    const onDelete=(item)=>{
        setModal(!modal)
        if(item.isCompleted){
            const newTodos=todos.filter((todo)=>todo.id!==item.id)
            setTodos(newTodos)
        }

    }
  return (
    <div className="App">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 header">
                    {modal?<Modal closeModel={setModal}/>:''}
                </div>
                <div className="col-md-12">
                    <TodoForm onAdd={onAdd}/>
                </div>
                <div className="col-md-12 itemsBox">
                    <TodoItems items={todos}
                               onDelete={onDelete}
                               onChange={onChange}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;


