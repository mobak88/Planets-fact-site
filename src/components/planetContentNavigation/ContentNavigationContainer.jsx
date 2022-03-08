import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 35rem;
`;

const ContentNavigationContainer = ({ children }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

export default ContentNavigationContainer;
