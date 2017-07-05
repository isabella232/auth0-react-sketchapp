/* @flow */
import React from 'react';
import { Text } from 'react-sketchapp';
import { fonts } from '../designSystem';
import type { Color } from '../processColor';

type P = {
  bold?: boolean,
  color: Color,
  children?: any
};
const SectionTitle = ({ bold, color, children }: P) => (
  <Text
    style={{
      ...fonts.Body,
      fontWeight: bold ? '500' : 'normal',
      marginBottom: 0,
      color
    }}
  >
    {children}
  </Text>
);

SectionTitle.defaultProps = {
  bold: false,
  children: undefined
};

export default SectionTitle;
