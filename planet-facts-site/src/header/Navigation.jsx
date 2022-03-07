import React from 'react';
import styled from 'styled-components';

const HeaderNavigation = styled.ul`
  display: flex;
  gap: 3.3rem;
`;

const HeaderLi = styled.li`
  list-style: none;
`;

const Navigation = () => {
  return (
    <nav>
      <HeaderNavigation>
        <HeaderLi>Mercury</HeaderLi>
        <HeaderLi>Venus</HeaderLi>
        <HeaderLi>Earth</HeaderLi>
        <HeaderLi>Mars</HeaderLi>
        <HeaderLi>Jupiter</HeaderLi>
        <HeaderLi>Saturn</HeaderLi>
        <HeaderLi>Uranus</HeaderLi>
        <HeaderLi>Neptune</HeaderLi>
      </HeaderNavigation>
    </nav>
  );
};

export default Navigation;
