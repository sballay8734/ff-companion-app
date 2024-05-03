import { configureStore } from '@reduxjs/toolkit';

import modalLogoutReducer from './features/ModalLogout/modalLogoutSlice';

export const store = configureStore({
  reducer: {
    modalLogout: modalLogoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// REMEMBER: use reduxApi for data fetching & caching while slices can be used for global state that doesn't need to be persisted, such as UI-related state like modal visibility, form data, and other transient application state
