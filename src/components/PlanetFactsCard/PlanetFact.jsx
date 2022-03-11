import React from 'react';
import styled from 'styled-components';

const Fact = styled.h2`
  color: ${({ theme }) => theme.colors.white};
`;

const PlanetFact = ({ children }) => {
  return <Fact>{children}</Fact>;
};

export default PlanetFact;
