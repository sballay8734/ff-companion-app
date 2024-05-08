import { configureStore } from '@reduxjs/toolkit';

import modalLogoutReducer from './features/ModalLogout/modalLogoutSlice';

export const store = configureStore({
  reducer: {
    modalLogout: modalLogoutReducer,
    // modalToast: modalToastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// REMEMBER: use reduxApi for data fetching & caching while slices can be used for global state that doesn't need to be persisted, such as UI-related state like modal visibility, form data, and other transient application state

// !TODO: ALWAYS use useAppDispatch & useAppSelector throughout your app instead of plain `useDispatch` and `useSelector` to avoid potential circular import dependency issues
