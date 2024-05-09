import { configureStore } from '@reduxjs/toolkit';

import modalLogoutReducer from './features/ModalLogout/modalLogoutSlice';
import { appApi } from './api/appApi';

export const store = configureStore({
  reducer: {
    modalLogout: modalLogoutReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(appApi.middleware),

  // optional, but required for refetchOnFocus/refetchOnReconnect behaviors
  // see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
  // setupListeners(store.dispatch)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// REMEMBER: use reduxApi for data fetching & caching while slices can be used for global state that doesn't need to be persisted, such as UI-related state like modal visibility, form data, and other transient application state

// !TODO: ALWAYS use useAppDispatch & useAppSelector throughout your app instead of plain `useDispatch` and `useSelector` to avoid potential circular import dependency issues
