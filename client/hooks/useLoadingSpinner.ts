import { useEffect } from 'react';
import { useAppDispatch } from '~/hooks/reduxConfig';
import {
  hideLoadingSpinner,
  showLoadingSpinner,
} from '~/store/features/LoadingSpinner/loadingSpinnerSlice';

// mTODO: May need to add isFetching as well
export const useLoadingSpinner = (isLoading: boolean) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading) {
      dispatch(showLoadingSpinner());
    } else {
      dispatch(hideLoadingSpinner());
    }
  }, [isLoading, dispatch]);
};
