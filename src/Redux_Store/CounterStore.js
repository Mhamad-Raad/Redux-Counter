
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },    
    decrement(state) {
      state.count--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    }
  }
})

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

const store = configureStore({
  reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;

export default store;
