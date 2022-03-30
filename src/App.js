import './App.css';
import TodoForm from './Components/TodoForm';
import {useEffect, useState} from "react";
import TodoItems from "./Components/TodoItems";
import Modal from "./Components/Modal";
import HideChackbox from "./Components/HideChackbox";
import StartAdding from "./Components/StartAdding";

function App() {
    const [todos,setTodos]=useState([]);
    const [modal,setModal]=useState(false);
    const [hidden,setHidden]=useState(false);
    const [success,setSuccess]=useState([{
        show:false,
        itemId:''
    }]);
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
    const onSuccess=(newSuccessObj)=>{
        setSuccess(newSuccessObj)
    }

    const onDelete=(item)=>{
        if(item){
            const newTodos=todos.filter((todo)=>todo.id!==success.itemId)
            setTodos(newTodos)
        }
    }
  return (
    <div className="App">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 header">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>
                        <HideChackbox hiddenState={setHidden}/>
                    </div>
                </div>
                <div className="col-md-12">
                    {modal?<Modal closeModal={setModal} onDelete={onDelete}/>:''}
                </div>
                <div className="col-md-12">
                    <TodoForm onAdd={onAdd}/>
                </div>
                <div className="col-md-12 itemsBox">
                    {todos.length!==0?<TodoItems items={todos}
                                                  hiddenChange={hidden}
                                                  onChange={onChange}
                                                  onSuccess={onSuccess}
                                                  closeModal={setModal}
                    />:<StartAdding/>}

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;


