import {memo} from "react";

export default memo(function HideChackbox({hiddenState}) {
    const handleHiddenElement=(e)=>{
        hiddenState(e.target.checked)
    }
    return(
        <div >
            <input type="checkbox"  onChange={handleHiddenElement}/>
            <label style={{marginLeft:"10px"}}>Hode completed</label>
        </div>
    )
})
