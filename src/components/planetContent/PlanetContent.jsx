import React from 'react';
import styled from 'styled-components';
import { fadeInAnimationRightToLeft } from '../animations/Animations';

const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  animation: ${fadeInAnimationRightToLeft}
    ${({ theme }) => theme.transitionDuration.duration} linear;

  @media screen and (max-width: 1165px) {
    font-size: 1.1rem;
  }
`;

const PlanetContent = ({ children, className, content }) => {
  return (
    <Content content={content} className={className}>
      {children}
    </Content>
  );
};

export default PlanetContent;
