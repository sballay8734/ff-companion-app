import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isVisible: boolean;
}

const initialState: ModalState = {
  isVisible: false,
};

export const modalLogoutSlice = createSlice({
  name: 'modalLogout',
  initialState,
  reducers: {
    showLogoutModal: (state) => {
      state.isVisible = true;
    },
    hideLogoutModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showLogoutModal, hideLogoutModal } = modalLogoutSlice.actions;
export default modalLogoutSlice.reducer;
