import './App.css';
import AddToDo from './Components/AddToDo';
import { Container } from 'react-bootstrap'
import ToDoList from './Components/ToDoList';
function App() {
  return (
    <Container className='py-3 root'>
      <AddToDo />
      <ToDoList />
    </Container>
  );
}

export default App;
