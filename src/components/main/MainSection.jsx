import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-template-rows: repeat(2, 2fr);
  margin-top: 12.6rem;
  row-gap: 3.9rem;
  justify-items: center;
`;

const MainSection = ({ children, className }) => {
  return <MainWrapper className={className}>{children}</MainWrapper>;
};

export default MainSection;
