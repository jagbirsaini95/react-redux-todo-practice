import { Container } from 'react-bootstrap'
import { Provider } from 'react-redux';

import './App.css';
import AddToDo from './Components/AddToDo';
import ToDoList from './Components/ToDoList';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <Container className='py-3 root'>
        <AddToDo />
        <ToDoList />
      </Container>
    </Provider>
  );
}

export default App;
