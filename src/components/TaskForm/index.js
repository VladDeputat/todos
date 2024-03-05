import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/todos/operations';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const onTaskAdd = (event) => {
    event.preventDefault();
    dispatch(addTask({ 'title': inputValue }));
    setInputValue('');
  };

  return (
    <Form
      onSubmit={(event) => onTaskAdd(event)}
      className='w-50 mx-auto mt-5 d-flex align-items-center position-relative'
    >
      <Form.Group className='w-75'>
        <Form.Control
          size='lg'
          type='text'
          placeholder='Enter task'
          autoComplete='off'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className='w-100 form-control'
          isInvalid={inputValue.length >= 11}
        />
        <Form.Control.Feedback type='invalid' className='position-absolute'>
          The title must be no longer than 10 letters
        </Form.Control.Feedback>
      </Form.Group>
      <Button
        variant='primary'
        type='submit'
        className='w-25'
        size='lg'
        disabled={inputValue.length >= 11}
      >
        Add
      </Button>
    </Form>
  );
};

export default TaskForm;
