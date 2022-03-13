import React from 'react';
import styled from 'styled-components';
import fadeInAnimation from '../animations/Animations';

const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  animation: ${fadeInAnimation}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  @media screen and (max-width: 1165px) {
    font-size: 1.1rem;
  }
`;

const PlanetContent = ({ children, className }) => {
  return <Content className={className}>{children}</Content>;
};

export default PlanetContent;
