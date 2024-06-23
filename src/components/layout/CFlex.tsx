import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface CFlexProps {
  children: React.ReactNode;
  scrollable?: boolean;
  onScroll?: (e: any) => void;
}

const CFlex = ({children, scrollable = false, onScroll}: CFlexProps) => {
  const insets = useSafeAreaInsets();
  const Wrapper = scrollable ? ScrollView : View;
  return (
    <Wrapper
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
      scrollEventThrottle={16}
      onScroll={onScroll}>
      {children}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CFlex;
