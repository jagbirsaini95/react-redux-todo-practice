import React from 'react'
import { Button, Container, Form, Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
import { updateTodo } from '../redux/actions/todo-actions'

export const UpdateTodo = ({ todo, setModalShow, show, onHide, setCurrentTodo, updateTodo }) => {

    const handleUpdateTodo = () => {
        updateTodo(todo, todo.id);
        setModalShow(false);
    }

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
                <Form onSubmit={handleUpdateTodo}>

                    {/* //title */}
                    <Form.Group>
                        <Form.Label>  Todo Title:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='Enter todo title...'
                            value={todo.title}
                            onChange={e => setCurrentTodo({ ...todo, title: e.target.value })}
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
                            onChange={e => setCurrentTodo({ ...todo, description: e.target.value })}
                        ></Form.Control>
                    </Form.Group>

                    {/* //button */}
                    <Container className='text-center mt-4'>
                        <Button type='submit' variant='primary'>
                            update Todo
                        </Button>
                    </Container>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    updateTodo: (todo, id) => (dispatch(updateTodo(todo, id)))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTodo)