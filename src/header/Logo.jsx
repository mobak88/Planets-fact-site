import React from 'react';
import styled from 'styled-components';

const HeaderLogo = styled.p`
  font-size: 2.8rem;
  font-family: 'Antonio', sans-serif;
  letter-spacing: -0.105rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const Logo = () => {
  return <HeaderLogo>The planets</HeaderLogo>;
};

export default Logo;
