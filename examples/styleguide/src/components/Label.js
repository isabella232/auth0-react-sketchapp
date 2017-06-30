import React, { Element } from 'react';
import chromajs from 'chroma-js';
import styled from 'styled-components/primitives';
import { colors, spacing } from '../designSystem';
import { View, Text, StyleSheet } from 'react-sketchapp';

// To-do
// Revise these colors
// Revise sizing of fonts / labels
// Revise types of labels

const labelStyles = [
  ['default', '#777'],
  ['primary', colors['Light Blue']],
  ['success', colors.Red],
  ['info', "#5bc0de"],
  ['warning', "#f0ad4e"],
  ['danger', "#d9534f"]
];

const getLabelColor = (style: string) =>
  labelStyles.find(i => i[0] === style)[1];

const LabelView = styled.View`
  border-radius: 3px;
  border: 1px solid;
  padding: 3px 12px;
  margin-bottom: ${spacing};
  align-items: center;
  justify-content: center;
  border-color: ${props => getLabelColor(props.type)};
`;

const LabelText = styled.Text`
  letter-spacing: 1px;
  font-size: 10.5;
  color: ${props => getLabelColor(props.type)};
`;

const Label = ({ children, type } : {
  children: Element<*>,
  type: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}) =>
  <LabelView type={type}>
    <LabelText type={type}>
      {children}
    </LabelText>
  </LabelView>;

Label.defaultProps = {
  type: 'default'
};

export default Label;
