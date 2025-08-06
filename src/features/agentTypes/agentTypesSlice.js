import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const agentTypesSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    agenttypes(state, action) {
      state.data = action.payload;
    },
  },
});

export const { agenttypes } = agentTypesSlice.actions;
export default agentTypesSlice.reducer;
