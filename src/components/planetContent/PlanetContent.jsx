import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;

  &.fadeInAnimation-appear {
    opacity: 0;
    transform: translateX(20%);
  }

  &.fadeInAnimation-appear-active {
    opacity: 1;
    transform: translateX(0%);
    transition: transform ${({ theme }) => theme.transitionDuration.duration}
        linear,
      opacity ${({ theme }) => theme.transitionDuration.duration} linear;
  }

  &.fadeInAnimation-enter {
    opacity: 0;
  }

  &.fadeInAnimation-enter-active {
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transitionDuration.duration}
      linear;
  }

  &.fadeInAnimation-enter-done {
    opacity: 1;
    transition: opacity ${({ theme }) => theme.transitionDuration.duration}
      linear;
  }

  &.fadeInAnimation-leave {
    opacity: 1;
  }

  &.fadeInAnimation-leave-active {
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitionDuration.duration}
      linear;
  }

  &.fadeInAnimation-leave-done {
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitionDuration.duration}
      linear;
  }

  @media screen and (max-width: 1165px) {
    font-size: 1.1rem;
  }
`;

const PlanetContent = ({ children, className, content }) => {
  const nodeRef = React.useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={true}
      appear={true}
      classNames='fadeInAnimation'
      timeout={1000}
    >
      <Content ref={nodeRef} content={content} className={className}>
        {children}
      </Content>
    </CSSTransition>
  );
};

export default PlanetContent;
