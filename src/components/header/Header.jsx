import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 0 3.2rem;
  height: 8.5rem;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  width: 100%;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
