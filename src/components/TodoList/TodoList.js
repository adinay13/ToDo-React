import React, {useState} from "react";
import {Row, Col, Button, FormControl} from "react-bootstrap";
import s from './TodoList.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSave, faTrash, faEdit, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";


function TodoList({todo, setTodo}) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!==id)
        setTodo(newTodo)
    }

    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id === id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title){
        setEdit(id)
        setValue(title)

    }

    function saveTodo(id){
        let newTodo = [...todo].map(item =>{
            if(item.id === id){
                item.title = value

            }
            return item
    })
        setTodo(newTodo)
        setEdit(null)

    }


    return(
        <div>
            {
                todo.map ( item => (
                    <div key={item.id} className={s.list}>
                        {
                            edit === item.id ?
                                <div>
                                <input onChange={(e)=>setValue(e.target.value)} value={value}/>
                                </div>
                                :
                                <div className={!item.status ? s.close : ''}>{ item.title }</div>
                        }
                        {
                            edit === item.id ?
                                <div>
                                    <Button  variant="outline-primary" onClick={()=>saveTodo(item.id)}><FontAwesomeIcon icon={ faSave }/></Button>{''}
                                </div> :
                                <div>
                                    <Button variant="outline-primary" onClick={ ()=>deleteTodo(item.id ) }><FontAwesomeIcon icon={ faTrash }/></Button>{''}
                                    <Button className={s.btn} variant="outline-primary" onClick={ ()=>editTodo(item.id, item.title) }><FontAwesomeIcon icon={ faEdit }/></Button>{''}
                                    <Button className={s.btn} variant="outline-primary" onClick={ ()=>statusTodo(item.id) }>
                                        {
                                            item.status ? <FontAwesomeIcon icon={ faLockOpen }/> : <FontAwesomeIcon icon={ faLock }/>
                                        }
                                    </Button>{''}
                                </div>
                        }


                    </div>
                ))
            }
        </div>
    )
}
export default TodoList;