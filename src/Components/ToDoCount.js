import React from 'react'
import { connect } from 'react-redux';

function ToDoCount({ todos }) {
  return (
    <h5>Number of total todos: {todos.length}</h5>
  )
}

const mapStateToProps = (state) => {
  return { todos: state.todos };
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoCount)