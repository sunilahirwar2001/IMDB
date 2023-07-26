


// import { createSlice } from '@reduxjs/toolkit';

//   const initialState ={
//    watchingData:[],
//   }

//   export const createSLice = createSlice({
//        name:'movies',
//        initialState,
//     reducers:{
    
//       watchListData:(state,action)=>{
//         const movie = action.payload;
//         const item = state.watchingData.find((item)=>item.id === movie.id);
       
//         if (item) {
//           item.quantity += 1;
//         } else {
//           movie.quantity =1;
//           state.watchingData.push(movie);
//         }
   
   
//       }




//     }

//   })
//    export  const {watchListData} = createSLice.actions 
//    export default createSLice.reducer
































import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchingData: [],

}
 const createSLice = createSlice({
  name: 'movies', // Make sure the name matches the slice name.
  initialState, // Use the correct variable name here.
  reducers: {
    watchListData: (state, action) => {
      const movie = action.payload;
      const item = state.watchingData.find((item) => item.id === movie.id);

      if (item) {
        item.quantity += 1;
      } else {
        movie.quantity = 1;
        state.watchingData.push(movie);
      }
    },
    removeOne: (state, action) => {
      const movieIdToRemove = action.payload;
      state.watchingData = state.watchingData.filter((item) => item.id !== movieIdToRemove);
    },
    totalRemove: (state) => {
      state.watchingData = [];
    },
   
  }
})


export const { watchListData,removeOne,totalRemove } = createSLice.actions;
export default createSLice.reducer;
