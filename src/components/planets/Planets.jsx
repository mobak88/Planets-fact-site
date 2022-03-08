import React from 'react';
import styled from 'styled-components';

// Trenger ikke å ha bakgrunnsbilde her, kan legge den inn når man lager reusable component versjon av denne.
const Planet = styled.div`
  width: 29rem;
  height: 29rem;
  grid-row: 1 / span 2;
  margin-top: 12rem;
`;

const Planets = ({ children, className }) => {
  return <Planet className={className}>{children}</Planet>;
};

export default Planets;
