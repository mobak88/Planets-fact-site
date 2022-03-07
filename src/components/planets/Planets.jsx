import React from 'react';
import styled from 'styled-components';
import mercury from '../../../public/planet-mercury.svg';

// Trenger ikke å ha bakgrunnsbilde her, kan legge den inn når man lager reusable component versjon av denne.
const Planet = styled.div`
  background-image: url(${mercury});
  width: 29rem;
  height: 29rem;
`;

const Planets = ({ children, className }) => {
  return <Planet className={className}>{children}</Planet>;
};

export default Planets;
