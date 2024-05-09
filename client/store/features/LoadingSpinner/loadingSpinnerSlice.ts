import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isVisible: boolean;
}

const initialState: ModalState = {
  isVisible: false,
};

export const loadingSpinnerSlice = createSlice({
  name: 'loadingSpinner',
  initialState,
  reducers: {
    showLoadingSpinner: (state) => {
      state.isVisible = true;
    },
    hideLoadingSpinner: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showLoadingSpinner, hideLoadingSpinner } = loadingSpinnerSlice.actions;
export default loadingSpinnerSlice.reducer;
