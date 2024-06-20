import React, {useCallback} from 'react';
import CFlex from '@/components/layout/CFlex.tsx';
import HomeHeader from '@/screens/Home/components/Home.Header.tsx';
import CSearchInput from '@/components/common/CSearchInput';
import CSpacing from '@/assets/styles/spacing.ts';
import {FlatList, StyleSheet, View} from 'react-native';

const HOME_LAYOUT = ['TOP_TRENDING', 'POPULAR'];

const Home = () => {
  const renderLayout = useCallback(
    ({item, index}: {item: string; index: number}) => {
      switch (item) {
        case 'TOP_TRENDING': {
          return <View />;
        }

        default: {
          return <View />;
        }
      }
    },
    [],
  );

  return (
    <CFlex>
      <HomeHeader />
      <CSearchInput style={styles.searchInputContainer} />
      <FlatList data={HOME_LAYOUT} renderItem={renderLayout} />
    </CFlex>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    marginHorizontal: CSpacing.m,
    marginVertical: CSpacing.s,
  },
});

export default Home;
