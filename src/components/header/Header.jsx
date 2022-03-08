import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import Navigation from './Navigation';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.2rem 4rem 2.1rem 3.2rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
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
