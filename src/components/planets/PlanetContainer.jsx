import React from 'react';
import styled from 'styled-components';

const Planet = styled.div`
  width: 29rem;
  height: 29rem;
  grid-row: 1 / span 2;
  margin-top: 12rem;
  justify-self: end;
  position: relative;
`;

const PlanetContainer = ({ children, className }) => {
  return <Planet className={className}>{children}</Planet>;
};

export default PlanetContainer;
