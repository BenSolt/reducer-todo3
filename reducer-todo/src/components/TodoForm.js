import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from "../reducers/Reducers";

const TodoForm = props => {
    const [state1,dispatch] = useReducer(todoReducer,initialState);
    const [newTitle, setNewTitle] = useState('');

const handleChanges = e => {
    setNewTitle(e.target.value);
}
console.log('reducer state', state1)

return (
    <div className="Container">
        <div>
            <h1>REducer Todo</h1>

            <input
            className='Input'
            type='text'
            name='newTitle'
            value={newTitle}
            onChange={handleChanges}
            />

            <button 
            className='Btn'
            onClick={() => {
                dispatch({ type:"ADD_TODO", payload: newTitle})
            }}>ADD ITEM</button>

            <button 
            className='Btn'
            onClick={() => {
                dispatch({ type:"CLEAR_TODO", payload: newTitle})
            }}>REMOVE ITEM</button>
        </div>

        {state1.map(state => {
            return(

                <div
                className={`item ${state.completed ? 'completed' :''}`}
                onClick={() => {
                    dispatch({ type: "TOGGLE_TODO", payload: state.id })
                }}>

                {state.item}

                </div>
            )             
        })}
    </div>
    )
}

export default TodoForm;