import Header from "./components/Header/Header";
import './App.css';
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import {useState} from "react";
import {Container} from "react-bootstrap";

function App() {

    const [todo, setTodo] = useState([]);
  return (
    <Container>

      <Header/>
        <AddToDo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>

    </Container>
  );
}

export default App;
