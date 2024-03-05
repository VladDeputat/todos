import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../../redux/todos/operations';
// import editIcon from "../../assets/edit.svg";
import deleteIcon from '../../assets/delete.svg';
import PropTypes from 'prop-types';

const TodoListItem = (props) => {
  const task = props.task;
  const dispatch = useDispatch();

  const togleTaskIsDone = () => {
    dispatch(
      editTask({
        'taskId': task.id,
        'taskData': { 'isDone': !task.isDone },
      }),
    );
  };

  // const onTaskEdit = () => {
  //   console.log(task.id);
  // };

  const onTaskDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <ListGroup.Item className='d-flex align-items-center'>
      <p
        onClick={togleTaskIsDone}
        style={{ 'textDecoration': task.isDone ? 'line-through' : 'none' }}
        className='m-2 w-100 cursor-pointer'
      >
        {task.title}
      </p>
      <div className='d-flex ms-auto'>
        {/* <Button
          variant="secondary"
          type="submit"
          className="d-flex align-items-center cursor-pointer me-1"
          style={{ padding: "10px" }}
          onClick={onTaskEdit}
          size="lg"
        >
          <img src={editIcon} alt="edit" style={{ width: "35px" }} />{" "}
        </Button> */}
        <Button
          variant='danger'
          type='submit'
          className='d-flex align-items-center cursor-pointer'
          style={{ 'padding': '10px' }}
          onClick={onTaskDelete}
          size='lg'
        >
          <img src={deleteIcon} alt='delete' style={{ 'width': '35px' }} />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

TodoListItem.propTypes = {
  'task': PropTypes.object,
};

export default TodoListItem;
