import { fonts, colors, spacing } from '../../designSystem';
import { View, StyleSheet, Text, Image } from 'react-sketchapp';
import styled from 'styled-components/primitives';

export const HeaderView = styled.View`
  width: 1400px;
  height: 110px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  background-color: ${props => (props.bgColor || colors['BG Light'])};
`;

export const Container = styled.View`
  width: 1100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BrandView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 89px;
`;

export const Subtitle = styled.Text`
  color: ${colors['BG Oil']};
  font-weight: 600;
  margin-left: ${spacing};
  margin-top: -2;
`;

export const NavView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavItem = styled.Text`
  padding: ${spacing}px;
  flex-direction: row;
`;

export const DropdownItem = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ChevronImage = styled.Image`
  height: 4.92px;
  width: 8.44px;
  margin-left: -10px;
  margin-right: 10px;
  opacity: 0.5;
`;