import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import userReducer from "./userSlice";
import reportReducer from "./reportSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["report"], // persist only report slice
};

const rootReducer = combineReducers({
  user: userReducer,
  report: reportReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
