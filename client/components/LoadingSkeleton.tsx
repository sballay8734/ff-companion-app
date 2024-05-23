import { Skeleton } from '@rneui/base';
import { View, StyleSheet } from 'react-native';

export default function LoadingSkeleton() {
  return (
    <View style={styles.skeletonView}>
      <Skeleton animation="wave" width={120} height={40} />
      <Skeleton animation="wave" circle width={40} height={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  skeletonView: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
});
