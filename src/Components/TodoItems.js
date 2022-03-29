import TodoItem from "./TodoItem";

function TodoItems({items,hiddenChange,onChange,onSuccess,closeModal}) {
    return(
        <div className="row">
            {hiddenChange?items.filter((item)=>{
                return item.isCompleted!==hiddenChange
            }).map((item)=>{
                return <TodoItem item={item}
                                 key={item.id}
                                 onChange={onChange}
                                 onSuccess={onSuccess}
                                 closeModal={closeModal}
                />
            }):items.map((item)=>{
                return <TodoItem item={item}
                                 key={item.id}
                                 onChange={onChange}
                                 onSuccess={onSuccess}
                                 closeModal={closeModal}
                />})}
        </div>

    )
}
export default TodoItems