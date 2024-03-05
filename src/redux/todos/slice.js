import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  'tasks': [],
};

export const todoSlice = createSlice({
  'name': 'todo',
  initialState,
  'reducers': {
    'getAllTasksAction': (state, { payload }) => {
      state.tasks = payload;
    },
    'addTaskAction': (state, { payload }) => {
      state.tasks = [...state.tasks, payload];
    },
    'editTaskAction': (state, { payload }) => {
      const taskIndex = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks = [...state.tasks].toSpliced(taskIndex, 1, payload);
    },
    'deleteTaskAction': (state, { payload }) => {
      state.tasks = state.tasks.filter((task) => task.id !== payload.id);
    },
    'errorAction': (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllTasksAction,
  addTaskAction,
  deleteTaskAction,
  editTaskAction,
  errorAction,
} = todoSlice.actions;

export default todoSlice.reducer;
