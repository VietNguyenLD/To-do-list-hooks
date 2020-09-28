import React from 'react'

const Form = ( props ) => {
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value)
    }

    const submitTodoHandeler = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos, {text: props.inputText, completed: false, id: Math.random() *1000}
        ]); 
        props.setInputText(" ");
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value)
    }
    
    return (
        <div>
            <form>
            <input value={props.inputText}
                onChange={inputTextHandler } type="text" className="todo-input" />
            <button onClick={submitTodoHandeler} className="todo-button">
            <i className="fas fa-plus-square" />
            </button>
            <div className="select">
            <select name="todos" className="filter-todo" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
            </div>
      </form>
        </div>
    )
}

export default Form