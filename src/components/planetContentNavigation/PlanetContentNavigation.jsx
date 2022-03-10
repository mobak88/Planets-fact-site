import React, { useState } from 'react';
import styled from 'styled-components';

let before = 0;

const Button = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  width: 35rem;
  height: 4.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;

  &::before {
    color: ${({ theme }) => theme.colors.whiteTransparent};
    content: ${(props) => {
      return props.number + 1;
    }};
    margin: 0 2rem 0 2rem;
  }
`;

const PlanetContentNavigation = ({ className, active }) => {
  const [btnOverviewActive, setBtnOverviewActive] = useState(false);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive((active = true));
    setBtnStructureActive((active = false));
    setBtnGeologyActive((active = false));
    console.log(btnOverviewActive, btnStructureActive, btnGeologyActive);
  };
  const btnStructureActiveHandler = () => {
    setBtnOverviewActive((active = false));
    setBtnStructureActive((active = true));
    setBtnGeologyActive((active = false));
    console.log(btnOverviewActive, btnStructureActive, btnGeologyActive);
  };
  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive((active = false));
    setBtnStructureActive((active = false));
    setBtnGeologyActive((active = true));
    console.log(btnOverviewActive, btnStructureActive, btnGeologyActive);
  };

  return (
    <>
      <Button
        number={before.toString()}
        active={btnOverviewActive}
        onClick={btnOverviewActiveHandler}
        className={className}
      >
        Overview
      </Button>
      <Button
        active={btnStructureActive}
        onClick={btnStructureActiveHandler}
        className={className}
      >
        Internal Structure
      </Button>
      <Button
        active={btnGeologyActive}
        onClick={btnGeologyActiveHandler}
        className={className}
      >
        Surface Geology
      </Button>
    </>
  );
};

export default PlanetContentNavigation;
