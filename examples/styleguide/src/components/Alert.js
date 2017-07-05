/* @flow */
import React, { Element } from 'react';
import chromajs from 'chroma-js';
import styled from 'styled-components/primitives';
import _ from 'lodash';
import { colors, spacing } from '../designSystem';

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
    backgroundColor: chromajs(colors.Yellow).luminance(0.75),
    color: chromajs(colors.Yellow).darken(3)
  },
  danger: {
    backgroundColor: chromajs(colors['Status Error']).luminance(0.75),
    color: chromajs(colors['Status Error']).darken(2)
  }
};

const AlertView = styled.View`
  border-radius: 3px;
  display: block;
  padding: ${`${spacing}px`};
  margin-bottom: ${spacing};
  background-color: ${props => _.get(alertStyles, [props.type, 'backgroundColor'], '')}
`;

const AlertText = styled.Text`
  color: ${props => _.get(alertStyles, [props.type, 'color'], '')}
`;

const Alert = ({ children, type }: {
  children?: Element<*>,
  type: $Keys<typeof alertStyles>
}) =>
  <AlertView type={type}>
    <AlertText type={type}>
      {children}
    </AlertText>
  </AlertView>;

Alert.defaultProps = {
  children: undefined,
  type: 'default'
};

export default Alert;
