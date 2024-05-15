import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isVisible: boolean;
}

const initialState: ModalState = {
  isVisible: false,
};

export const modalCompareFiltersSlice = createSlice({
  name: 'modalCompareFilters',
  initialState,
  reducers: {
    showFilterSelectModal: (state) => {
      state.isVisible = true;
    },
    hideFilterSelectModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showFilterSelectModal, hideFilterSelectModal } = modalCompareFiltersSlice.actions;
export default modalCompareFiltersSlice.reducer;
