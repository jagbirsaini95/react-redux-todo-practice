import React, { useState, useEffect } from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateTodo } from '../redux/actions/todo-actions'
import { initialTodoState } from './AddToDo'

export const UpdateTodo = ({ todo, show, onHide, todos, updateTodo }) => {
    const [updateTodok, setUpdateTodo] = useState(initialTodoState)

    // useEffect(() => {
    //     findTodoUpdate();
    // }, [])

    // const findTodoUpdate = () => {
    //     const currenttodo = todos.find(todo => todo.id === todoId)
    //     console.log(currenttodo, "hhhjh");
    //     setUpdateTodo(currenttodo)
    // }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update todo
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* //title */}
                <Form.Group>
                    <Form.Label>  Todo Title:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder='Enter todo title...'
                        value={todo.title}
                        onChange={e => setUpdateTodo({ ...updateTodok, title: e.target.value })}
                        required
                    ></Form.Control>
                </Form.Group>

                {/* //Description */}
                <Form.Group className='mt-4'>
                    <Form.Label>  Todo Description:</Form.Label>
                    <Form.Control
                        type="text"
                        required
                        as={'textarea'}
                        placeholder='Enter todo Description...'
                        value={todo.description}
                        onChange={e => setUpdateTodo({ ...updateTodok, description: e.target.value })}
                    ></Form.Control>
                </Form.Group>

                {/* //button */}
                <Container className='text-center mt-4'>
                    <Button type='button' onClick={() => updateTodo(updateTodok, todo.id)} variant='primary'>
                        update Todo
                    </Button>
                </Container>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state) => {
    return { todos: state.todos }
}

const mapDispatchToProps = (dispatch) => ({
    updateTodo: (todo, id) => (dispatch(updateTodo(todo, id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo)