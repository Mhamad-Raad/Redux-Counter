import { legacy_createStore as createStore } from 'redux'

const initialState = {
  count: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      showCounter: state.showCounter,
      count: state.count + 1,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      showCounter: state.showCounter,
      count: state.count - 1,
    };
  } else if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      count: state.count,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
