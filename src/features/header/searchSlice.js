// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// export const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     city: '',
//     temperature: null,
//     description: '',
//     status: 'idle',
//     error: null
//   },
//   reducers: {
//     setCityName: (state, action) => {
//       state.city = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWeather.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchWeather.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Add the fetched data to the state
//         state.temperature = action.payload.temperature;
//         state.description = action.payload.description;
//       })
//       .addCase(fetchWeather.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setCityName } = weatherSlice.actions;

// export default weatherSlice.reducer;
