import React from 'react';
import styled from 'styled-components';

const ButtonGeology = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  width: 35rem;
  height: 4.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  &::before {
    color: ${({ theme }) => theme.colors.whiteTransparent};
    margin: 0 2rem 0 2rem;
    content: '02';
  }
`;

const SurfaceGeologyBtn = ({ className, btnGeologyActiveHandler, active }) => {
  return (
    <ButtonGeology
      active={active}
      className={className}
      onClick={btnGeologyActiveHandler}
    >
      Surface Geology
    </ButtonGeology>
  );
};

export default SurfaceGeologyBtn;
