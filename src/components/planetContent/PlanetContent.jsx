import React from 'react';
import styled from 'styled-components';

const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
`;

const PlanetContent = ({ children, className }) => {
  return <Content className={className}>{children}</Content>;
};

export default PlanetContent;
