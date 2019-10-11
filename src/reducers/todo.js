import * as TYPES from '../constants/ActionTypes'

export function todo(state = [], action) {
  const findTask = (id) => state.findIndex((task) => task._id === id);
  let index;
  let items =  [...state];

  switch (action.type) {
    case TYPES.TASKS_LOADED:
      return action.items;

    case TYPES.UPDATE_TASK:
      index = findTask(action.payload.id);
      if (index === -1) { return state }
      items[index].update = action.payload.status;
      return items;

    case TYPES.TOGGLE_TASK:
      index = findTask(action.item._id);
      if (index === -1) { return state }
      items[index] = action.item;
      return items;

    case TYPES.ADD_TASK:
      items.push(action.item);
      return items;

    case TYPES.REMOVE_TASK:
      index = findTask(action.id);
      if (index === -1) { return state; }
      items.splice(index, 1);
      return items;

    default:
      return state;
  }
}
