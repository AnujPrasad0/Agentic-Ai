import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";
import agentTypesReducer from "../features/agentTypes/agentTypesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    agentTypes: agentTypesReducer,
  },
});
