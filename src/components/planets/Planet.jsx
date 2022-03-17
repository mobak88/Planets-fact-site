import React from 'react';
import styled from 'styled-components';
import {
  fadeInAnimation,
  fadeInAnimationTopToBottom,
} from '../animations/Animations';

const PlanetImg = styled.img`
  width: 29rem;
  height: 29rem;
  animation: ${fadeInAnimationTopToBottom}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;
`;

const Planet = ({ src, className }) => {
  return <PlanetImg className={className} src={src} />;
};

export default Planet;
