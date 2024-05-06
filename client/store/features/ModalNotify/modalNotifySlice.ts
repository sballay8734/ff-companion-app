import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  isVisible: boolean;
  message: null | string;
}

const initialState: ModalState = {
  isVisible: false,
  message: null,
};

export const modalNotifySlice = createSlice({
  name: 'modalNotify',
  initialState,
  reducers: {
    showNotifyModal: (state) => {
      state.isVisible = true;
    },
    hideNotifyModal: (state) => {
      state.isVisible = false;
    },
    setNotifyMsg: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload;
    },
  },
});

export const { showNotifyModal, hideNotifyModal, setNotifyMsg } = modalNotifySlice.actions;
export default modalNotifySlice.reducer;
