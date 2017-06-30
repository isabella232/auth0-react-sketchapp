/* @flow */
import React, { Element } from 'react';
import chromajs from 'chroma-js';
import styled from 'styled-components/primitives';
import _ from 'lodash';
import { colors, spacing } from '../designSystem';
import { View, Text, StyleSheet } from 'react-sketchapp';

const alertStyles = {
  default: {
    backgroundColor: '#f0f0f0'
  },
  success: {
    backgroundColor: chromajs(colors['Status Success']).luminance(0.75),
    color: chromajs(colors['Status Success']).darken(2)
  },
  info: {
    backgroundColor: chromajs(colors['Light Blue']).luminance(0.75),
    color: chromajs(colors['Light Blue']).darken(2)
  },
  warning: {
    backgroundColor: chromajs(colors['Yellow']).luminance(0.75),
    color: chromajs(colors['Yellow']).darken(3)
  },
  danger: {
    backgroundColor: chromajs(colors['Status Error']).luminance(0.75),
    color: chromajs(colors['Status Error']).darken(2)
  }
};

const AlertView = styled.View`
  border-radius: 3px;
  display: block;
  padding: ${spacing};
  margin-bottom: ${spacing};
  background-color: ${props => alertStyles[props.type].backgroundColor}
`;

const AlertText = styled.Text`
  color: ${props => alertStlyes[prop.type].color}
`;

const Alert = ({ children, type }: {
  children: Element<*>,
  type: 'default' | 'success' | 'info' | 'warning' | 'danger'
}) =>
  <AlertView>
    <AlertText>
      {children}
    </AlertText>
  </View>;

Alert.defaultProps = {
  type: 'default'
};

export default Alert;