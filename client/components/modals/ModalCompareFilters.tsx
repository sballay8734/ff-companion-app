import { Modal, View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RootState } from '~/store/store';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxConfig';
import { useRouter } from 'expo-router';
import { pageContainerPadding } from '~/constants/themes';
import { hideFilterSelectModal } from '~/store/features/ModalCompareFiltersSlice/ModalCompareFiltersSlice';

import { Text } from '~/constants/themes';

export default function ModalCompareFilters() {
  const isVisible = useAppSelector((state: RootState) => state.modalCompareFilters.isVisible);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useCustomTheme();

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={{ ...styles.modalContent, backgroundColor: theme.colors.base300 }}>
        <View style={{ ...styles.titleContainer, backgroundColor: theme.colors.base100 }}>
          <Text style={styles.title}>Choose filters</Text>
          <Pressable onPress={() => dispatch(hideFilterSelectModal())}>
            <MaterialIcons name="close" color="#fff" size={22} />
          </Pressable>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
          }}>
          {/* TODO: Organize by timeFrame, stat, etc... ALLOW TO SELECT YEAR ALSO */}
          <Pressable
            style={{
              backgroundColor: theme.colors.base300,
              borderColor: theme.colors.accent,
              borderWidth: 1,
              paddingHorizontal: pageContainerPadding,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={() => console.warn('All Time')}>
            <Text>All Time</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: theme.colors.base300,
              borderColor: theme.colors.accent,
              borderWidth: 1,
              paddingHorizontal: pageContainerPadding,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={() => console.warn('Points For')}>
            <Text>Points For</Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: theme.colors.base300,
              borderColor: theme.colors.accent,
              borderWidth: 1,
              paddingHorizontal: pageContainerPadding,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={() => console.warn('Points Against')}>
            <Text>Points Against</Text>
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
