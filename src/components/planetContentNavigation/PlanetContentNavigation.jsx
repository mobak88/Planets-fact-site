import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  width: 35rem;
  height: 4.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
`;

const PlanetContentNavigation = ({ children, className }) => {
  return <Button className={className}>{children}</Button>;
};

export default PlanetContentNavigation;