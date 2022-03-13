import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderNavigation = styled.ul`
  display: flex;
  gap: 3.3rem;

  @media screen and (max-width: 1165px) {
    padding-left: 0;
  }
`;

const HeaderLi = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderAnchor = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  padding-top: 2.859rem;
  cursor: pointer;
`;

const MercuryAnchor = styled(HeaderAnchor)`
  border-top: ${({ active }) =>
    active ? ({ theme }) => theme.colors.blue + '4px solid' : 'none'};

  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.cerulean};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.cerulean};
    }
  }
`;

const VenusAnchor = styled(HeaderAnchor)`
  border-top: ${(props) =>
    props.isActive
      ? ({ theme }) => theme.colors.tulipTree + '4px solid'
      : 'none'};

  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.tulipTree};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.tulipTree};
    }
  }
`;

const EarthAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.purple};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.purple};
    }
  }
`;

const MarsAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.valencia};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.valencia};
    }
  }
`;

const JupiterAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.bloodMoon};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.bloodMoon};
    }
  }
`;

const SaturnAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.rustyNail};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.rustyNail};
    }
  }
`;

const UranusAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.caribbeanGreen};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.caribbeanGreen};
    }
  }
`;

const NeptuneAnchor = styled(HeaderAnchor)`
  &:hover {
    border-top: 4px solid ${({ theme }) => theme.colors.blue};
  }

  @media screen and (max-width: 1165px) {
    &:hover {
      border-top: none;
      border-bottom: 4px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;

const Navigation = ({ active }) => {
  return (
    <nav>
      <HeaderNavigation>
        <HeaderLi>
          <MercuryAnchor
            className={(props) => (props.isActive ? active : '')}
            to='/'
          >
            Mercury
          </MercuryAnchor>
        </HeaderLi>
        <HeaderLi>
          <VenusAnchor className={(props) => props.isActive} to='/venus'>
            Venus
          </VenusAnchor>
        </HeaderLi>
        <HeaderLi>
          <EarthAnchor to='/earth'>Earth</EarthAnchor>
        </HeaderLi>
        <HeaderLi>
          <MarsAnchor to='/mars'>Mars</MarsAnchor>
        </HeaderLi>
        <HeaderLi>
          <JupiterAnchor to='/jupiter'>Jupiter</JupiterAnchor>
        </HeaderLi>
        <HeaderLi>
          <SaturnAnchor to='/saturn'>Saturn</SaturnAnchor>
        </HeaderLi>
        <HeaderLi>
          <UranusAnchor to='/uranus'>Uranus</UranusAnchor>
        </HeaderLi>
        <HeaderLi>
          <NeptuneAnchor to='/neptune'>Neptune</NeptuneAnchor>
        </HeaderLi>
      </HeaderNavigation>
    </nav>
  );
};

export default Navigation;
