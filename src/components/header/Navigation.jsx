import React from 'react';
import styled from 'styled-components';

const HeaderNavigation = styled.ul`
  display: flex;
  gap: 3.3rem;
`;

const HeaderLi = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderAnchor = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <nav>
      <HeaderNavigation>
        <HeaderLi>
          <HeaderAnchor href='/'>Mercury</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Venus</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Earth</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Mars</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Jupiter</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Saturn</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Uranus</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor href='/'>Neptune</HeaderAnchor>
        </HeaderLi>
      </HeaderNavigation>
    </nav>
  );
};

export default Navigation;
