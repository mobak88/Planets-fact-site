import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 35rem;
  justify-self: end;

  @media screen and (max-width: 1165px) {
    width: 28rem;
    margin-top: 5.6rem;
  }
`;

const ContentNavigationContainer = ({ children }) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

export default ContentNavigationContainer;
