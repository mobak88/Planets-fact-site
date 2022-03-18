import React from 'react';
import styled from 'styled-components';

const PlanetImg = styled.img`
  width: 29rem;
  height: 29rem;

  @media screen and (max-width: 720px) {
    width: 60%;
    height: 60%;
  }
`;

const Planet = ({ src, className }) => {
  return <PlanetImg className={className} src={src} />;
};

export default Planet;
