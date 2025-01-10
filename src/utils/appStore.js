import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import connectionsSlice from "./connectionSlice";
import requestSlice from "./request";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    feed: feedSlice,
    connection: connectionsSlice,
    request: requestSlice,
  },
});

export default appStore;
