import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTasks } from '../../redux/todos/operations';
import { allTasksSelector } from '../../redux/todos/selectors';
import ListGroup from 'react-bootstrap/ListGroup';
import TodoListItem from '../TodoListItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const [activeFilterTab, setActiveFilterTab] = useState('all');
  const allTasks = useSelector(allTasksSelector);

  const FILTER_TABS = ['all', 'in progress', 'done'];

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const inProgressTasksArr = allTasks.filter((task) => !task.isDone);
  const doneTasksArr = allTasks.filter((task) => task.isDone);

  const getFilteredTasks = (tab) => {
    switch (tab) {
      case FILTER_TABS[1]: {
        return inProgressTasksArr;
      }
      case FILTER_TABS[2]: {
        return doneTasksArr;
      }
      default: {
        return allTasks;
      }
    }
  };

  return (
    <ListGroup
      as='ol'
      numbered
      className='w-50 p-3 mx-auto mt-5'
      style={{ 'backgroundColor': '#eee' }}
    >
      <ul className='nav nav-tabs nav-justified w-100'>
        {FILTER_TABS.map((tab) => (
          <li className='nav-item text-capitalize cursor-pointer' key={tab}>
            {tab === activeFilterTab ? (
              <p className='nav-link active'>
                {tab} ({getFilteredTasks(tab).length})
              </p>
            ) : (
              <p className='nav-link' onClick={() => setActiveFilterTab(tab)}>
                {tab} ({getFilteredTasks(tab).length})
              </p>
            )}
          </li>
        ))}
      </ul>
      {getFilteredTasks(activeFilterTab).map((task) => (
        <TodoListItem task={task} key={task.id} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
