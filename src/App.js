import Header from "./components/Header/Header";
import './App.css';
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";

function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first todo',
            status: true
        },
        {
            id: 2,
            title: 'second todo',
            status: true
        },
        {
            id: 3,
            title: 'third todo',
            status: false
        }
    ]);
  return (
    <div className="App">
      <Header/>
        <AddToDo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>

    </div>
  );
}

export default App;
