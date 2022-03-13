import React from 'react';
import styled from 'styled-components';

const Fact = styled.h2`
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 1165px) {
    font-size: 2.4rem;
    line-height: 3.6rem;
  }
`;

const PlanetFact = ({ children }) => {
  return <Fact>{children}</Fact>;
};

export default PlanetFact;
