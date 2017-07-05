/* @flow */
import React from 'react';
import { StyleSheet } from 'react-sketchapp';
import styled from 'styled-components/primitives';
import _ from 'lodash';
import { fonts, spacing, colors } from '../designSystem';

export const buttonSizes = {
  large: {
    height: spacing * 4,
    paddingBottom: 2
  },
  medium: {
    height: spacing * 3,
    paddingBottom: 4
  },
  small: {
    height: spacing * 2.5,
    paddingBottom: 4
  },
  micro: {
    height: spacing * 2,
    paddingBottom: 4,
    textStyles: {
      fontSize: 11
    }
  }
};

export const buttonStyles = {
  success: {
    backgroundColor: colors.Red,
    textStyles: {
      color: 'white'
    }
  },
  primary: {
    backgroundColor: colors['Light Blue'],
    textStyles: {
      color: 'white'
    }
  },
  disabled: {
    backgroundColor: '#CCCCCC',
    textStyles: {
      color: 'rgba(0,0,0,.26)'
    }
  },
  transparent: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#444'
  },
  link: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#444',
    textStyles: {
      letterSpacing: 0,
      fontWeight: 'normal',
      fontSize: fonts.Body.fontSize
    }
  }
};

const getTextStyles = (type: string, size: string) =>
  Object.assign({},
    _.get(buttonSizes, `${size}.textStyles`),
    _.get(buttonStyles, `${type}.textStyles`)
  );

const ButtonView = styled.View`
  border-radius: 3px;
  flex-direction: row;
  align-items: center;
  padding: 0 ${spacing}px;
  letter-spacing: 1px;
`;

const ButtonText = styled.Text`
  color: ${props => (props.invert ? 'white' : '')},
`;

type ButtonType = {
  name: string,
  type: $Keys<typeof buttonStyles>,
  size: $Keys<typeof buttonSizes>,
  invert?: boolean,
  style: {}
};

const Button = ({ name, type, size, invert, style }: ButtonType) =>
  <ButtonView style={{
    ...buttonStyles[type],
    ...buttonSizes[size],
    ...StyleSheet.flatten(style)
  }}
  >
    <ButtonText
      invert={invert}
      style={{
        ...fonts.SC,
        ...getTextStyles(type, size)
      }}
    >
      {type === 'link' ? name : name.toUpperCase() }
    </ButtonText>
  </ButtonView>;

Button.defaultProps = {
  type: 'success',
  size: 'medium',
  invert: false
};

export default Button;
