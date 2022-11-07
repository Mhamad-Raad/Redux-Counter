import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialcounterState = {
  count: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialcounterState,
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
});

const authInitialState = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});



const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
  });

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
