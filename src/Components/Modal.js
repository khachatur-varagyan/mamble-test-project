import './Modal.css';
import {useState} from "react";

function Modal({closeModel}) {
    return (
        <div className="modalMessage">
            <div>
                <div className="textMessage">
                    <p>Are you sour you want to delete?</p>
                </div>
                <div className="btnMessage">
                    <button onClick={()=>{closeModel(true)}}>yes</button>
                    <button style={{marginLeft:"10px"}} onClick={()=>{closeModel(false)}}>no</button>
                </div>

            </div>
        </div>
    )
}
export default Modal