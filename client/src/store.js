import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./redux/slices/categorySlice";
import cartReducer from "./redux/slices/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  categoryReducer,
  cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist compatibility
    }),
});

export const persistor = persistStore(store);
