import React from 'react';
import styled from 'styled-components';
import { fadeInAnimationBottomToTop } from '../animations/Animations';

const PlanetHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  animation: ${fadeInAnimationBottomToTop}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  @media screen and (max-width: 1165px) {
    font-size: 4.8rem;
    line-height: 7.2rem;
  }
`;

const Heading = ({ children, className }) => {
  return <PlanetHeading className={className}>{children}</PlanetHeading>;
};

export default Heading;
