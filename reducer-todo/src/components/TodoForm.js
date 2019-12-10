import React, { useState, useReducer } from 'react'
import { initialState, todoReducer } from "../reducers/Reducers";

const TodoList = props => {
    const [state1,dispatch] = useReducer(todoReducer,initialState);
    const [newTitle, setNewTitle] = useState('');

const handleChanges = e => {
    setNewTitle(e.target.value);
}
console.log('reducer state', state1)

return (
    <div>
        <h1>REducer Todo</h1>

        <input
        className='Input'
        type='text'
        name='newTitle'
        value={newTitle}
        onChange={handleChanges}
        />

        <button onClick={() => {
            dispatch({ type:"ADD_TODO", payload: newTitle})
        }}>ADD ITEM</button>

        <button onClick={() => {
            dispatch({ type:"CLEAR_TODO", payload: newTitle})
        }}>REMOVE ITEM</button>

        

        


    </div>
)


}