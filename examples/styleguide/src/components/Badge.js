/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { fonts } from '../designSystem';

type BadgeTypes = {
  filled?: boolean,
  children?: React$Element<any>,
  color: string
};

const Badge = ({ children, filled, color }: BadgeTypes) => (
  <View
    style={{
      borderRadius: 3,
      backgroundColor: filled ? '#333' : 'transparent',
      paddingLeft: 8,
      paddingRight: 8,
      paddingBottom: 3,
      marginTop: 8,
      borderWidth: 1,
      borderColor: '#333'
    }}
  >
    <Text
      style={{
        ...fonts.SC,
        marginTop: -3,
        color
      }}
    >
      {children.toUpperCase()}
    </Text>
  </View>
);

Badge.defaultProps = {
  filled: false,
  children: undefined
};

export default Badge;
