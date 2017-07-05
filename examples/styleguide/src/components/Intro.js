/* @flow */
import React from 'react';
import { Text } from 'react-sketchapp';
import { fonts } from '../designSystem';
import type { Color } from '../processColor';

type P = {
  bold?: boolean,
  color: Color,
  children?: any,
};
const Intro = ({ bold, color, children }: P) => (
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

Intro.defaultProps = {
  bold: false,
  children: undefined
};

export default Intro;
