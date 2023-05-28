import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import ToDoCount from './ToDoCount';

function AddToDo() {
  const [todo, setTodo] = useState({
    title: "",
    description: ""
  })

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    console.log("===", e, todo);
  }
  return (
    <Container>
      <Row>
        <Col >
          <Card className='shadow'>
            <Card.Body>
              <h2>Add Todo here...</h2>
              <ToDoCount />

              <Form onSubmit={handleTodoSubmit}>
                {/* //title */}
                <Form.Group>
                  <Form.Label>  Todo Title:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder='Enter todo title...'
                    value={todo.title}
                    onChange={e => setTodo({ ...todo, title: e.target.value })}
                  ></Form.Control>
                </Form.Group>

                {/* //Description */}
                <Form.Group className='mt-4'>
                  <Form.Label>  Todo Description:</Form.Label>
                  <Form.Control
                    type="text"
                    as={'textarea'}
                    placeholder='Enter todo Description...'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                  ></Form.Control>
                </Form.Group>

                {/* //button */}
                <Container className='text-center mt-4'>
                  <Button type='submit' variant='primary'>
                    Add Todo
                  </Button>
                </Container>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default AddToDo