import React, { useState } from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import ToDoCount from './ToDoCount';
import { connect } from 'react-redux';
import { removeTodo } from '../redux/actions/todo-actions';
import UpdateTodo from './UpdateTodo';

function ToDoList({ todos, removeTodo }) {
  const [modalShow, setModalShow] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const handleModal = (todo) => {
    setCurrentTodo(todo)
    setModalShow(true)
  }
  return (
    <Container className='mt-4 pt-3 pb-3'>
      <Row>
        <Col>
          <Card>
            <Card.Body className='shadow'>
              <h3> ALL todo's list </h3>
              <ToDoCount />
              <ListGroup className='m-2'>
                {
                  todos.map((todo, index) => (
                    <ListGroup.Item key={todo.id} className='shadow mt-4'>
                      <h3>{todo.title}</h3>
                      <p>{todo.description}</p>
                      <Button className='m-3' variant={'danger'} onClick={() => removeTodo(todo.id)}>X</Button>
                      <Button variant="warning" onClick={() => handleModal(todo)}>edit</Button>
                    </ListGroup.Item>
                  ))
                }
                {currentTodo && <UpdateTodo
                  show={modalShow}
                  todo={currentTodo}
                  onHide={() => setModalShow(false)}
                />}
              </ListGroup>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  )
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
}

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (id) => dispatch(removeTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);