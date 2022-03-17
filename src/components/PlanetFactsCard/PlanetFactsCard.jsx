import React from 'react';
import styled from 'styled-components';
import { fadeInAnimationBottomToTop } from '../animations/Animations';

const FactsCard = styled.div`
  width: 25.5rem;
  height: 12.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  padding: 2rem 0 0 2.3rem;
  animation: ${fadeInAnimationBottomToTop}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  @media screen and (max-width: 1165px) {
    width: 16.4rem;
    height: 10rem;
    padding: 1.6rem 0 0 1.5rem;
  }
`;

const PlanetFactsCard = ({ children }) => {
  return <FactsCard>{children}</FactsCard>;
};

export default PlanetFactsCard;
