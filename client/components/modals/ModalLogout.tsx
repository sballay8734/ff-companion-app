import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RootState } from '~/store/store';
import { hideLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';
import { useAuth } from '@clerk/clerk-expo';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { error, success } from '~/store/features/ModalToast/toastContentConfig';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxConfig';
import { setToastParams } from '~/store/features/ModalToast/modalToastSlice';
import Toast from 'react-native-toast-message';

export default function ModalLogout() {
  const isVisible = useAppSelector((state: RootState) => state.modalLogout.isVisible);
  const dispatch = useAppDispatch();
  const { signOut } = useAuth();
  const theme = useCustomTheme();

  // TODO: Eventually move logic to ReduxAPI (waiting on decision for backend)
  async function handleLogout() {
    try {
      await signOut();
      dispatch(hideLogoutModal());
      // !TODO: You may not call store.getState() while the reducer is executing
      Toast.show(success.logout);
    } catch (err) {
      console.error(err);
      Toast.show(error.logout);
    }
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Are you sure you want to logout?</Text>
          <Pressable onPress={handleLogout}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Pressable
            style={{
              backgroundColor: theme.colors.admin,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={handleLogout}>
            <Text style={{ fontSize: 24 }}>YES</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
});
