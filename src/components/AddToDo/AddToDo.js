import React, {useState} from 'react';
import uuid from "react-uuid";

function AddToDo({todo, setTodo}) {
    const [value, setValue]= useState('')
    console.log(todo)

    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuid.v4(),
                title: value,
                status: true
            }]
        )
        setValue('')

    }

    return (
        <div>
            <input placeholder='Введите задачу' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={saveTodo}>Сохранить</button>
        </div>
    );
}
export default AddToDo;