import * as TYPES from '../constants/ActionTypes'
import Api from '../services/todoAPI';

const tasksLoaded = items => ({
  type: TYPES.TASKS_LOADED,
  items,
});

const taskChanged = item => ({
  type: TYPES.TOGGLE_TASK,
  item,
});

const taskAdded = item => ({
  type: TYPES.ADD_TASK,
  item,
});

const taskRemoved = id => ({
  type: TYPES.REMOVE_TASK,
  id,
});

export function getTodoList(params) {
  return (dispatch) => {
    Api.tasks(params)
      .then(({ data }) => dispatch(tasksLoaded(data)));
  };
}

export function updateTask(id, data) {
  return (dispatch) => {
    Api.updateTask(id, data)
      .then(({ data }) => dispatch(taskChanged(data)));
  };
}

export function addTask(description) {
  return (dispatch) => {
    Api.addTask({ description })
      .then(({ data }) => dispatch(taskAdded(data)));
  };
}

export function removeTask(id) {
  return (dispatch) => {
    Api.removeTask(id)
      .then(() => dispatch(taskRemoved(id)));
  };
}
