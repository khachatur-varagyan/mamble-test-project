import {useState} from "react";
import './TodoForm.css';

function TodoForm({onAdd}){
    const [text, setText]=useState("");

    const handleOnChange=(e)=>{
        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!text || text.length>54) return
        onAdd(text)
        setText("")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <label>Task</label>
                    <div className="row">
                        <div className="col-md-9">
                            <input type="text"
                                   value={text}
                                   onChange={handleOnChange}
                                   placeholder="Write here"
                                   className={text.length>54?'error':''}
                            />
                            {text.length>54?<span>Task content can contain max 54 characters.</span>:''}
                        </div>
                        <div className="col-md-2">
                            <button>Add</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>


            </form>
        </div>
    )
}
export default TodoForm