import React from 'react';
import { View } from 'react-native';
import Dash from 'react-native-dash';
import { theme } from '../styles/theme';

export const DashedLine = ({ marginTop }) => {
  return (
    <Dash
      dashGap={3}
      dashColor={theme.colors.lineGrey}
      style={{ marginTop: 22, marginBottom: 10, width: 500 }}
    />
  );
};

export const Row = ({ children }) => {
  return <View style={{ flexDirection: 'row', }}>{children}</View>;
};
