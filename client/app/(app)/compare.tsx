import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';

// REMOVE: TEST DATA
import { calculateOwnerStats } from '~/mockData/mockData';

export default function ComparePage() {
  const theme = useCustomTheme();

  const [owner1, setOwner1] = useState('11111');
  const [owner2, setOwner2] = useState('11112');
  const [year, setYear] = useState<string | null>(null);
  const [filter, setFilter] = useState<'playoff' | 'regSzn' | null>(null);

  const { owner1Stats, owner2Stats } = calculateOwnerStats(owner1, owner2, year, filter);

  const handleYearChange = (newYear: string | null) => {
    setYear(newYear);
  };

  const handleFilterChange = (newFilter: 'playoff' | 'regSzn' | null) => {
    setFilter(newFilter);
  };

  return (
    <SafeAreaView edges={['right', 'left', 'top']}>
      <Stack.Screen options={{ title: 'Compare', headerShown: false }} />
      <View style={styles.container}>
        {/* Owner1 */}
        <View style={styles.ownerCard}>
          <Text>Owner 1 Stats:</Text>
          <Text>Point Differential: {owner1Stats.pointDifferential}</Text>
          <Text>Average Points Scored: {owner1Stats.averagePointsScored}</Text>
        </View>
        {/* Chart */}
        <View style={styles.chartView}>
          <Text>Chart</Text>
        </View>
        {/* Owner2 */}
        <View style={styles.ownerCard}>
          <Text>Owner 2 Stats:</Text>
          <Text>Point Differential: {owner2Stats.pointDifferential}</Text>
          <Text>Average Points Scored: {owner2Stats.averagePointsScored}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: '100%',
    paddingVertical: 0,
  },
  ownerCard: {
    borderWidth: 2,
    borderColor: 'green',
    width: '100%',
    flexGrow: 1,
  },
  chartView: {
    flexGrow: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
