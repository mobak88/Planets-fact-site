import React from 'react';
import styled from 'styled-components';

const PlanetImg = styled.img`
  width: 29rem;
  height: 29rem;
`;

const Planet = ({ src, className }) => {
  return <PlanetImg className={className} src={src} />;
};

export default Planet;
