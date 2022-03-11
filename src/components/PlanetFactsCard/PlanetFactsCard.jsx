import React from 'react';
import styled from 'styled-components';

const FactsCard = styled.div`
  width: 25.5rem;
  height: 12.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  padding: 2rem 0 0 2.3rem;
`;

const PlanetFactsCard = ({ children }) => {
  return <FactsCard>{children}</FactsCard>;
};

export default PlanetFactsCard;
