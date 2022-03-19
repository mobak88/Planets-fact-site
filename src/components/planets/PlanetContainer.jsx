import React from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { fadeInAnimationTopToBottom } from '../animations/Animations';

const Planet = styled.div`
  width: 29rem;
  height: 29rem;
  grid-row: 1 / span 2;
  margin-top: 12rem;
  justify-self: end;
  position: relative;
  animation: ${fadeInAnimationTopToBottom}
    ${({ theme }) => theme.transitionDuration.duration} ease-out;

  &.fadeInAnimation-enter {
    opacity: 0;
  }

  &.fadeInAnimation-enter-active {
    opacity: 1;
    transition: opacity
      ${({ theme }) => theme.transitionDuration.slideInToLeftDuration} linear;
  }

  &.fadeInAnimation-exit {
    opacity: 1;
  }

  &.fadeInAnimation-exit-active {
    opacity: 0;
    transition: opacity
      ${({ theme }) => theme.transitionDuration.slideInToLeftDuration} linear;
  }

  @media screen and (max-width: 1165px) {
    grid-column: 1 / span 2;
    justify-self: center;
    margin: 3rem 0 13rem 0;
  }

  @media screen and (max-width: 720px) {
    grid-column: 1 / span 1;
    justify-self: center;
    grid-area: planet;
    margin: 5rem 0 5rem 0;
    width: 14.1rem;
    height: 14.1rem;
  }
`;

const PlanetContainer = ({ children, className }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        classNames='fadeInAnimation'
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
        key={Math.random() * 100}
      >
        <Planet className={className}>{children}</Planet>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PlanetContainer;
