import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${({ theme }) => theme.screenSize.desktop};
  height: 100vh;
`;

const PageWrapper = ({ children, className }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default PageWrapper;
