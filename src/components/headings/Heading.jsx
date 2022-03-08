import React from 'react';
import styled from 'styled-components';

const PlanetHeading = styled.h1`
  color: ${({ theme }) => theme.colors.white};
`;

const Heading = ({ children, className }) => {
  return <PlanetHeading className={className}>{children}</PlanetHeading>;
};

export default Heading;
