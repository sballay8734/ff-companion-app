import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartesianChart, Line } from 'victory-native';

import { Text, pageContainerPadding } from '~/constants/themes';
import { useCustomTheme } from '~/hooks/useCustomTheme';
import { useFont } from '@shopify/react-native-skia';

// REMOVE: TEST DATA
import {
  TestOwnerData,
  calculateOwnerStats,
  testOwner1Data,
  testOwner2Data,
} from '~/mockData/mockData';

export default function ComparePage() {
  const theme = useCustomTheme();
  const font = useFont(require('../../assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf'), 8);

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

  // REMOVE: TEST DATA vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
  const prepareData = (testOwner1Data: TestOwnerData, testOwner2Data: TestOwnerData) => {
    const years = new Set([
      ...Object.keys(testOwner1Data.totalPoints),
      ...Object.keys(testOwner2Data.totalPoints),
    ]);

    const data = [];

    for (const year of years) {
      data.push({
        year: parseInt(year),
        owner1TotalPoints: testOwner1Data.totalPoints[year] || 0,
        owner2TotalPoints: testOwner2Data.totalPoints[year] || 0,
      });
    }

    return data;
  };

  const DATA = prepareData(testOwner1Data, testOwner2Data);

  function TestChart() {
    return (
      <View style={{ width: '100%', flexGrow: 1 }}>
        <CartesianChart
          data={DATA}
          xKey="year"
          yKeys={['owner1TotalPoints', 'owner2TotalPoints']}
          padding={{ left: 4 }}
          axisOptions={{
            font,
            lineColor: theme.colors.primary,
            labelColor: theme.colors.primary,
            tickCount: {
              x: DATA.length,
              y: 3,
            },
          }}>
          {({ points }) => (
            <>
              <Line
                points={points.owner1TotalPoints}
                color={theme.colors.primary}
                strokeWidth={2}
              />
              <Line
                points={points.owner2TotalPoints}
                color={theme.colors.disabledText}
                strokeWidth={2}
              />
            </>
          )}
        </CartesianChart>
      </View>
    );
  }
  // REMOVE: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Compare',
          headerTransparent: false,
          // headerStyle: {
          //   backgroundColor: theme.colors.background,
          // },
        }}
      />
      <View style={styles.container}>
        {/* Owner1 */}
        <View style={styles.ownerCard}>
          <Text>Owner 1 Stats:</Text>
          <Text>Point Differential: {owner1Stats.pointDifferential}</Text>
          <Text>Average Points Scored: {owner1Stats.averagePointsScored}</Text>
        </View>
        {/* Chart */}
        <View style={styles.chartView}>
          <TestChart />
        </View>
        {/* Owner2 */}
        <View style={styles.ownerCard}>
          <Text>Owner 2 Stats:</Text>
          <Text>Point Differential: {owner2Stats.pointDifferential}</Text>
          <Text>Average Points Scored: {owner2Stats.averagePointsScored}</Text>
        </View>
        {/* Bottom Nav */}
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navButton} onPress={() => handleFilterChange(null)}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => handleFilterChange('regSzn')}>
            <Text>Reg Szn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => handleFilterChange('playoff')}>
            <Text>Playoffs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderColor: 'red',
    // borderWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: pageContainerPadding,
  },
  ownerCard: {
    borderWidth: 2,
    borderColor: '#2e365e',
    backgroundColor: '#1f2440',
    width: '100%',
    flexGrow: 2,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartView: {
    flexGrow: 1.5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#7660bf',
    backgroundColor: '#121212',
    borderRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    backgroundColor: '#121212',
    paddingVertical: 10,
  },
  navButton: {
    padding: 10,
  },
});
