import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  gap: 2.4rem;
  justify-self: end;

  @media screen and (max-width: 1165px) {
    gap: 1.4rem;
    justify-self: flex-start;
  }
`;

const PlanetContentContainer = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default PlanetContentContainer;
