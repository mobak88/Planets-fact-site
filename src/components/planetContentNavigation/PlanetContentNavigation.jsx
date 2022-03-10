import React, { useState } from 'react';
import styled from 'styled-components';

let before = 0;

const Button = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  width: 35rem;
  height: 4.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;

  &::before {
    color: ${({ theme }) => theme.colors.whiteTransparent};
    ${(props) => {
      before = props.number + 1;
      return 'content:' + before + ';';
    }};
    margin: 0 2rem 0 2rem;
  }
`;

const PlanetContentNavigation = ({ className, structureContent, passProp }) => {
  return (
    <>
      <Button
        number={before}
        active={false}
        onClick={passProp}
        className={className}
      >
        Overview
      </Button>
      <Button active={true} onClick={structureContent} className={className}>
        Internal Structure
      </Button>
      <Button onClick={structureContent} className={className}>
        Surface Geology
      </Button>
    </>
  );
};

export default PlanetContentNavigation;
