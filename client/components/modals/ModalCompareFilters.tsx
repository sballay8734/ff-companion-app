import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Modal, View, Pressable, StyleSheet } from 'react-native';

import { pageContainerPadding, Text } from '~/constants/themes';
import { useAppDispatch, useAppSelector } from '~/hooks/reduxConfig';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { hideFilterSelectModal } from '~/store/features/ModalCompareFiltersSlice/ModalCompareFiltersSlice';
import { RootState } from '~/store/store';

export default function ModalCompareFilters() {
  const isVisible = useAppSelector((state: RootState) => state.modalCompareFilters.isVisible);
  const dispatch = useAppDispatch();
  const theme = useCustomTheme();

  return (
    <Modal animationType="slide" transparent visible={isVisible}>
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
