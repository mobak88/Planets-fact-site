import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.2rem 4rem 2.7rem 3.2rem;
  border-bottom: 0.1rem solid #000000;
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
