import { Modal, View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RootState } from '~/store/store';
import { hideLogoutModal } from '~/store/features/ModalLogout/modalLogoutSlice';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxConfig';
import { useRouter } from 'expo-router';
import { pageContainerPadding } from '~/constants/themes';
import { useSignOutMutation } from '~/store/api/appApi';

export default function ModalLogout() {
  const isVisible = useAppSelector((state: RootState) => state.modalLogout.isVisible);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useCustomTheme();

  // TODO: Eventually move logic to ReduxAPI (waiting on decision for backend)
  async function handleLogout() {
    useSignOutMutation();
    dispatch(hideLogoutModal());
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Are you sure you want to logout?</Text>
          <Pressable onPress={() => dispatch(hideLogoutModal())}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.admin,
              paddingHorizontal: pageContainerPadding,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={handleLogout}>
            <Text style={{ fontSize: 24 }}>YES</Text>
          </TouchableOpacity>
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
    paddingHorizontal: pageContainerPadding,
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
