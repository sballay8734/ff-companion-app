import { FontAwesome6 } from '@expo/vector-icons';
import { useFont } from '@shopify/react-native-skia';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CartesianChart, Line } from 'victory-native';

import ModalCompareFilters from '~/components/modals/ModalCompareFilters';
import { Text, pageContainerPadding } from '~/constants/themes';
import { useAppDispatch } from '~/hooks/reduxConfig';
import { useCustomTheme } from '~/hooks/useCustomTheme';
// REMOVE: TEST DATA
import {
  TestOwnerData,
  calculateOwnerStats,
  testOwner1Data,
  testOwner2Data,
} from '~/mockData/mockData';
import { showFilterSelectModal } from '~/store/features/ModalCompareFiltersSlice/ModalCompareFiltersSlice';

export default function ComparePage() {
  const theme = useCustomTheme();
  const font = useFont(require('../../assets/fonts/Roboto_Mono/RobotoMono-Regular.ttf'), 8);
  const dispatch = useAppDispatch();

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
      <View style={{ width: '100%', flexGrow: 1, position: 'relative' }}>
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
                strokeWidth={1}
              />
              <Line
                points={points.owner2TotalPoints}
                color={theme.colors.baseTextXFaded}
                strokeWidth={1}
              />
            </>
          )}
        </CartesianChart>
        {/* TODO: GOOD IDEA but needs to be styled */}
        <View
          style={{
            position: 'absolute',
            top: 6,
            left: 30,
            borderWidth: 1,
            borderColor: '#1f2440',
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 2,
            backgroundColor: '#2c3051',
          }}>
          <Text style={{ fontSize: 8 }}>All Time</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 6,
            left: 80,
            borderWidth: 1,
            borderColor: '#1f2440',
            paddingHorizontal: 6,
            paddingVertical: 4,
            borderRadius: 2,
            backgroundColor: '#9e80ff',
          }}>
          <Text style={{ fontSize: 8, color: 'black' }}>Points For</Text>
        </View>
      </View>
    );
  }
  // REMOVE: ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  return (
    <SafeAreaView edges={['right', 'left']}>
      <Stack.Screen
        options={{
          title: 'Compare',
          headerTitleStyle: { color: theme.colors.baseText },
          headerStyle: { backgroundColor: theme.colors.base100 },
          headerTransparent: false,
          // headerStyle: {
          //   backgroundColor: theme.colors.background,
          // },
        }}
      />
      <View style={styles.container}>
        {/* Owner1 */}
        <View
          style={{
            ...styles.ownerCard,
            backgroundColor: theme.colors.base100,
            borderColor: theme.colors.neutral,
          }}>
          <Text style={{ color: theme.colors.baseText }}>Owner 1 Stats:</Text>
          <Text style={{ color: theme.colors.baseText }}>
            Point Differential: {owner1Stats.pointDifferential}
          </Text>
          <Text style={{ color: theme.colors.baseText }}>
            Average Points Scored: {owner1Stats.averagePointsScored}
          </Text>
        </View>
        {/* Chart */}
        <View
          style={{
            ...styles.chartView,
            borderColor: theme.colors.neutral,
            backgroundColor: theme.colors.base200,
          }}>
          <TestChart />
        </View>
        {/* Owner2 */}
        <View
          style={{
            ...styles.ownerCard,
            backgroundColor: theme.colors.base100,
            borderColor: theme.colors.neutral,
          }}>
          <Text style={{ color: theme.colors.baseText }}>Owner 2 Stats:</Text>
          <Text style={{ color: theme.colors.baseText }}>
            Point Differential: {owner2Stats.pointDifferential}
          </Text>
          <Text style={{ color: theme.colors.baseText }}>
            Average Points Scored: {owner2Stats.averagePointsScored}
          </Text>
        </View>
        {/* Bottom Nav */}
        <View style={{ ...styles.bottomNav, backgroundColor: theme.colors.base100 }}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => dispatch(showFilterSelectModal())}>
            <FontAwesome6 name="filter" size={24} color={theme.colors.accent} />
          </TouchableOpacity>
        </View>
      </View>
      <ModalCompareFilters />
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
    // borderColor: '#2e365e',
    // backgroundColor: '#1f2440',
    borderWidth: 1,
    width: '100%',
    flexGrow: 2,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartView: {
    // borderColor: '#7660bf',
    // backgroundColor: '#121212',
    flexGrow: 1.5,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingVertical: 10,
  },
  navButton: {
    padding: 10,
  },
});

// TODO: Need to add tooltips and gestures
