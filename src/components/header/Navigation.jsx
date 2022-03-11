import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderNavigation = styled.ul`
  display: flex;
  gap: 3.3rem;
`;

const HeaderLi = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderAnchor = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <nav>
      <HeaderNavigation>
        <HeaderLi>
          <HeaderAnchor to='/'>Mercury</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/venus'>Venus</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/earth'>Earth</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/mars'>Mars</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/jupiter'>Jupiter</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/saturn'>Saturn</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/uranus'>Uranus</HeaderAnchor>
        </HeaderLi>
        <HeaderLi>
          <HeaderAnchor to='/neptune'>Neptune</HeaderAnchor>
        </HeaderLi>
      </HeaderNavigation>
    </nav>
  );
};

export default Navigation;
