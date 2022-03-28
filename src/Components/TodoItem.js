import './TodoItem.css'
function TodoItem({item,onDelete,onChange}) {
    const handleOnDelete=()=>{
        onDelete(item)
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
            <div className="row itemRow">
                <div className="col-md-1"></div>
                <div className="col-md-1 checkBox">
                    <input type="checkbox"
                           onChange={handleOnChange}
                           checked={item.isCompleted}
                    />
                </div>
                <div className="col-md-8 textBox">
                    <span>{item.text}</span>
                </div>
                <div className="col-md-2 btnBox">
                    <div onClick={handleOnDelete} className="btnDelete">&#215;</div>
                </div>

            </div>
        </div>

    )
}
export default TodoItem