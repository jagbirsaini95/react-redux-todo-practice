import React, { useState } from 'react'
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import ToDoCount from './ToDoCount';

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      title: 'first',
      description: 'first desc'
    },
    {
      title: 'first',
      description: 'first desc'
    }
  ])
  return (
    <Container className='mt-4 shadow'>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h3> ALL todo's list </h3>
              <ToDoCount />
              <ListGroup className='m-2'>
                {
                  todos.map((todo, index) => (
                    <ListGroup.Item className='shadow mt-4'>
                      <h3>{todo.title}</h3>
                      <p>{todo.description}</p>
                    </ListGroup.Item>
                  ))
                }
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ToDoList;