import axios from 'axios';
import {
  getAllTasksAction,
  addTaskAction,
  deleteTaskAction,
  editTaskAction,
  errorAction,
} from './slice';

export const getAllTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/tasks');
    dispatch(getAllTasksAction(res.data));
  } catch (error) {
    dispatch(errorAction(error.message));
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const res = await axios.post('http://localhost:3000/tasks/', {
      'title': taskData.title,
      'isDone': false,
    });
    dispatch(addTaskAction(res.data));
  } catch (error) {
    dispatch(errorAction(error.message));
  }
};

export const editTask =
  ({ taskId, taskData }) => async (dispatch) => {
    try {
      const res = await axios.patch(
        `http://localhost:3000/tasks/${taskId}`,
        taskData,
      );
      dispatch(editTaskAction(res.data));
    } catch (error) {
      dispatch(errorAction(error.message));
    }
  };

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:3000/tasks/${taskId}`);
    dispatch(deleteTaskAction(res.data));
  } catch (error) {
    dispatch(errorAction(error.message));
  }
};
