import React from 'react';
import styled from 'styled-components';

const Planet = styled.div`
  width: 29rem;
  height: 29rem;
  grid-row: 1 / span 2;
  margin-top: 12rem;
  justify-self: end;
  position: relative;

  @media screen and (max-width: 1165px) {
    grid-column: 1 / span 2;
    justify-self: center;
    margin: 3rem 0 13rem 0;
  }
`;

const PlanetContainer = ({ children, className }) => {
  return <Planet className={className}>{children}</Planet>;
};

export default PlanetContainer;
