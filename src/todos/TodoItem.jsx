import React from "react";
import './TodoItem.css';

const TodoItem = function (todo, onRemovePressed, onCompletedPressed) {
    return(
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button 
                    className="completed-button"
                    onClick={() => onCompletedPressed(todo.text)}
                >Mark as completed</button>
                <button 
                    className="remove-button"
                    onClick={() => onRemovePressed(todo.text)}
                >Remove</button>
            </div>
        </div>
    );
};



export default TodoItem;