import {useRef, useState} from "react";

function Form(){
    const [text, setText]=useState("");
    const onChangeRef=useRef("")
    const handleOnChange=(e)=>{
        console.log(onChangeRef.current.value)
    }
    return(
        <div>
            <h2>{onChangeRef.current}</h2>

                <input type="text" ref={onChangeRef} />
                <button onClick={handleOnChange}>Add</button>

        </div>
    )
}
export default Form