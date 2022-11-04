import React, {useState} from 'react';
import uuidv4 from "react-uuid";
import {Row, Col, Button, FormControl} from "react-bootstrap";
import s from './AddTodo.module.css'

function AddToDo({todo, setTodo}) {
    const [value, setValue]= useState('')
    console.log(todo)

    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')

    }

    return (
        <Row>
            <Col className={s.addTodo}>
            <FormControl className={s.addTodo} placeholder='Введите задачу' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <Button className={s.btn} size="lg" onClick={saveTodo} variant="outline-primary">Сохранить</Button>{''}
            </Col>
        </Row>
    );
}
export default AddToDo;