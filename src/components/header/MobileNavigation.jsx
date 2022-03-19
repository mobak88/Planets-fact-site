import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Chevron from '/icon-chevron.svg';

const StyledHamburgerButton = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  background-color: transparent;
  border: none;
  display: none;

  @media screen and (max-width: 720px) {
    display: flex;
  }
`;

const BurgerButtonBar = styled.span`
  content: '.';
  background-color: ${({ theme }) => theme.colors.white};
  width: 2.4rem;
  height: 0.3rem;
`;

const MobileMenuContainer = styled.div`
  width: 100vw;
  height: 1000px;
  background-color: ${({ theme }) => theme.colors.bodyBackground};
  position: absolute;
  z-index: 2;
  padding: 2.4rem 2.4rem 6.7rem 2.4rem;
  display: flex;
  flex-direction: column;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

const MobileNav = styled.nav``;

const MobileUl = styled.ul`
  padding: 0;
`;

const MobileLi = styled.li`
  list-style: none;
  border-bottom: 0.1rem solid rgba(255, 255, 255, 0.2);
  padding: 2rem 0;
`;

const NeptuneLi = styled(MobileLi)`
  border-bottom: none;
`;

const MobileAnchor = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem;
  line-height: 2.5rem;
  font-weight: bold;
  letter-spacing: 0.136rem;
  display: flex;
  width: 100%;

  &::before {
    margin-right: 2.5rem;
    content: '';
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;
  }

  &::after {
    margin: 0 1.1rem 0 auto;
    content: url(${Chevron});
    width: 0.3rem;
    height: 0.3rem;
  }
`;

const MobileNavMercury = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.cerulean};
  }
`;
const MobileNavVenus = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.tulipTree};
  }
`;
const MobileNavEarth = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
const MobileNavMars = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.valencia};
  }
`;
const MobileNavJupiter = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.bloodMoon};
  }
`;
const MobileNavSaturn = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.rustyNail};
  }
`;
const MobileNavUranus = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.caribbeanGreen};
  }
`;
const MobileNavNeptune = styled(MobileAnchor)`
  &::before {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const MobileNavigation = ({ mobileMenu }) => {
  return (
    <MobileMenuContainer active={mobileMenu}>
      <MobileNav>
        <MobileUl>
          <MobileLi>
            <MobileNavMercury to='/'>Mercury</MobileNavMercury>
          </MobileLi>
          <MobileLi>
            <MobileNavVenus to='/venus'>Venus</MobileNavVenus>
          </MobileLi>
          <MobileLi>
            <MobileNavEarth to='/earth'>Earth</MobileNavEarth>
          </MobileLi>
          <MobileLi>
            <MobileNavMars to='/mars'>Mars</MobileNavMars>
          </MobileLi>
          <MobileLi>
            <MobileNavJupiter to='/jupiter'>Jupiter</MobileNavJupiter>
          </MobileLi>
          <MobileLi>
            <MobileNavSaturn to='/saturn'>Saturn</MobileNavSaturn>
          </MobileLi>
          <MobileLi>
            <MobileNavUranus to='/uranus'>Uranus</MobileNavUranus>
          </MobileLi>
          <NeptuneLi>
            <MobileNavNeptune to='/neptune'>Neptune</MobileNavNeptune>
          </NeptuneLi>
        </MobileUl>
      </MobileNav>
    </MobileMenuContainer>
  );
};

export const HamburgerButton = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
    console.log(mobileMenu);
  };

  return (
    <StyledHamburgerButton mobileMenu={mobileMenu} onClick={mobileMenuHandler}>
      <BurgerButtonBar />
      <BurgerButtonBar />
      <BurgerButtonBar />
    </StyledHamburgerButton>
  );
};
