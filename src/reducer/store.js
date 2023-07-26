import { configureStore } from '@reduxjs/toolkit'
import { createSlice  } from '@reduxjs/toolkit';
import cartReducer from './reducerSlice'
import reducerSlice from './reducerSlice';
const initialState = {
  watchingData: [],
}
// const store = configureStore({
//   movies: cartReducer   
// })

const store = configureStore({
  reducer: {
    movies: reducerSlice, // Make sure the key 'movies' matches the slice name in the reducer.
  },
});
export default store;                    


