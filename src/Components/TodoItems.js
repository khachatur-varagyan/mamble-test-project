import TodoItem from "./TodoItem";

function TodoItems({items,onDelete,onChange}) {
    return(
        <div className="row">
            {items.map((item)=>{
                return <TodoItem item={item}
                                 key={item.id}
                                 onDelete={onDelete}
                                 onChange={onChange}
                />
            })}
        </div>

    )
}
export default TodoItems