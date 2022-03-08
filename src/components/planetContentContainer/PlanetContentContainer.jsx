import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35rem;
  gap: 2.4rem;
`;

const PlanetContentContainer = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default PlanetContentContainer;
