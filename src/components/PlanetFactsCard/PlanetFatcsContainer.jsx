import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-bottom: 5rem;
  grid-column: 1 / span 2;
  gap: 3rem;
  margin: 4.8rem 0 10rem 0;
`;

const PlanetFatcsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PlanetFatcsContainer;
