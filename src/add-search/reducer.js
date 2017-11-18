import { ADD_ITEM, FILTER_ITEM, REMOVE_ITEM } from './actionTypes.js';

export default (state = { filter: '', data: [] }, action) => {
  var newState = {
    filter: state.filter,
    data: [...state.data]
  };

  switch (action.type) {
    case ADD_ITEM:
      newState.data.push({
        id: action.id,
        text: action.text
      });
      break;
    case FILTER_ITEM:
      newState.filter = action.filter;
      break;
    case REMOVE_ITEM:
      newState.data = newState.data.filter((item) => {
        return item.id !== action.id;
      });
      break;
    default:
      break;
  }

  return newState;
}