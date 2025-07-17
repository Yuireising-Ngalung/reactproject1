export default function HomeUI({todos, dispatch, setNewTodo, newTodo}){
    return(<>
        <div className="container my-5">
            <h2 className="text-center text-uppercase">Todo List</h2>
            <hr />
            <div className="my-5">
                <form onSubmit={(event) => event.preventDefault()}>
                    <div className="form-group d-flex gap-2">
                        <input 
                            type="text" 
                            name="todo" 
                            className="form-control" 
                            value={newTodo} 
                            onChange={(event) => setNewTodo(event.target.value)}
                            placeholder="please enter items"
                        />
                        <button 
                            className="btn btn-success" 
                            type="submit" 
                            onClick={()=>{
                                if (newTodo.trim() === "") return;
                                dispatch({type:'add', todo:newTodo});
                                setNewTodo('');
                            }
                            }>ADD</button>
                    </div>
                </form>

                
                <div className="my-3 d-flex flex-column gap-2 align-items-center">
                    {
                        todos && todos.map((todo, index)=> {
                            return(
                                <div key={index} className="item w-75  d-flex justify-content-between gap-2 bg-light p-2">
                                    <p className="fw-bold">{todo}</p>
                                    <div>
                                        <button className="btn btn-danger" onClick={() => dispatch({type:'delete', id: index})}>乂</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}