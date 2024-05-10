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
      console.log('SHOWING!');
      state.isVisible = true;
    },
    hideLoadingSpinner: (state) => {
      console.log('HIDING!');
      state.isVisible = false;
    },
  },
});

export const { showLoadingSpinner, hideLoadingSpinner } = loadingSpinnerSlice.actions;
export default loadingSpinnerSlice.reducer;
