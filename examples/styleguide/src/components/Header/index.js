/* @flow */
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-sketchapp';
import { fonts, colors, spacing } from '../../designSystem';
import styled from 'styled-components/primitives';
import {
  HeaderView, Container, BrandView, Logo, Subtitle,
  NavView, NavItem, DropdownItem, ChevronImage
} from './styles';
import Button from '../Button';

// ✅ To-do
// - Avatar logged in
// - Align to right with buttons

const LogoGreyURL = 'https://cdn.auth0.com/styleguide/latest/img/logo-grey.png';
const LogoBlueURL = 'https://cdn.auth0.com/styleguide/latest/img/logo-blue.png';
const chevronWhiteURL = 'https://cdn.auth0.com/website/sg-assets/chevron-white.png';
const chevronBlackURL = 'https://cdn.auth0.com/website/sg-assets/chevron.png';

const Brand = ({ mode, subtitle }) =>
  <BrandView>
    <Logo
      source={(mode === 'dark') ? LogoGreyURL : LogoBlueURL }
      resizeMode='contain'
    />
    { subtitle &&
      <Subtitle style={{ ...fonts['SC'] }}>
        { subtitle.toUpperCase() }
      </Subtitle>
    }
  </BrandView>;

const Nav = ({ mode, items, appendButtons }) =>
  <NavView>
    { items.map(item =>
      <DropdownItem>
        <NavItem
          key={item}
          name='nav-item'
          style={{ color: (mode === 'dark') ? 'white' : 'black' }}
        >
          {item.name}
        </NavItem>
        
        { item.dropdown &&
          <ChevronImage
            source={ (mode === 'dark') ? chevronWhiteURL : chevronBlackURL }
            resizeMode='contain'
          />
        }
      </DropdownItem>
    )}

    {Object.keys(appendButtons || {}).map(button => (
      <Button
        style={{ marginLeft: spacing }}
        name={button || 'Talk to Sales'}
        type={appendButtons[button].type || 'link'}
        size="micro"
        invert={mode === 'dark'}
      />
    ))}
  </NavView>

const Login = ({ mode }) => 
  <NavView>
    <NavItem
      name='nav-item' 
      style={{
        color: mode === 'dark' ? 'white' : 'black'
      }}
    >
      Log In
    </NavItem>
    <Button type="success" size="micro" name="Sign Up" />
  </NavView>;

const Header = ({ subtitle, items, appendButtons, mode, bgColor, login }: any) => (
  <HeaderView bgColor={bgColor}>
    <Container>
      <Brand mode={mode} subtitle={subtitle} />
      <Nav mode={mode} items={items} appendButtons={appendButtons}/>
      {login && <Login mode={mode} />}
    </Container>
  </HeaderView>
);

Header.defaultProps = {
  items: [
    {
      name: 'Platform',
      dropdown: true
    },
    {
      name: 'Solutions',
      dropdown: true
    },
    {
      name: 'Why Auth0',
      dropdown: true
    },
    {
      name: 'Developers',
      dropdown: true
    },
    {
      name: 'Pricing'
    }
  ],
  appendButtons: {
    'Talk to Sales': {
      type: 'link'
    }
  },
  login: true
};

export default Header;
