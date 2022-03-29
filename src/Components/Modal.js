import './Modal.css';
import {useState} from "react";

function Modal({closeModal, onDelete}) {
    return (
        <div className="modalMessage">
            <div>
                <div className="textMessage">
                    <p>Are you sour you want to delete?</p>
                </div>
                <div className="btnMessage">
                    <button onClick={()=>{
                        onDelete(true)
                        closeModal(false)
                    }}>yes</button>
                    <button style={{marginLeft:"10px"}} onClick={()=>{closeModal(false)}}>no</button>
                </div>
            </div>
        </div>
    )
}
export default Modal