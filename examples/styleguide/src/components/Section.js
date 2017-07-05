/* @flow */
import React from 'react';
import { View } from 'react-sketchapp';
import SectionTitle from './SectionTitle';

type P = {
  title: string,
  description: string,
  children?: any,
};
const Section = ({ title, description, children }: P) => (
  <View style={{ marginBottom: 96, marginRight: 50, flexDirection: 'row' }}>
    <View style={{ width: 400, paddingRight: 90 }}>
      <SectionTitle bold>{title}</SectionTitle>
      <SectionTitle>{description}</SectionTitle>
    </View>
    <View>
      {children}
    </View>
  </View>
);

Section.defaultProps = {
  children: undefined
};

export default Section;
