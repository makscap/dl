import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: 1,
};

const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    changeProgram: (state, action) => {
      state.type = action.payload;
    },
  },
});

export const { changeProgram } = programSlice.actions;

export const selectProgram = (state) => state.program;

const programReducer = programSlice.reducer;
export default programReducer;
