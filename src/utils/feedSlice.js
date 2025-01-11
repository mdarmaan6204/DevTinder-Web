import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,

  reducers: {
    addFeed(state, action) {
      return action.payload;
    },
    removeUserFromFeed(state, action) {
      const newFeed = state.filter((f) => f._id !== action.payload);
      return newFeed;
    },
    removeFeed(state, action) {
      return null;
    },
  },
});

export const { addFeed, removeFeed, removeUserFromFeed } = feedSlice.actions;
export default feedSlice.reducer;
