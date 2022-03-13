import React from 'react';
import styled from 'styled-components';
import fadeInAnimation from '../animations/Animations';

const PlanetHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  animation: ${fadeInAnimation}
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
