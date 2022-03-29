import './TodoItem.css'
function TodoItem({item,onChange,onSuccess,closeModal}) {
    const handleOnSuccess=()=>{
        closeModal(item.isCompleted)
        const newSuccessObj={
            show:item.isCompleted,
            itemId:item.id,
        }
        onSuccess(newSuccessObj)
    }
    const handleOnChange=(e)=>{
        const changeItem={
            ...item,
            isCompleted:e.target.checked
        }
        onChange(changeItem)
    }
    return (
        <div className="col-md-12 itemBox">
            <div className="emptyItemDiv"></div>
            <div className=" checkBox">
                <input type="checkbox"
                       onChange={handleOnChange}
                       checked={item.isCompleted}
                />
            </div>
            <div className="textBox">
                <span className={item.isCompleted ? "hiddenText":''}>{item.text}</span>
            </div>
            <div className=" btnBox">
                <div onClick={handleOnSuccess} className="btnDelete">&#215;</div>
            </div>
            <div className="emptyItemDiv"></div>
        </div>

    )
}
export default TodoItem