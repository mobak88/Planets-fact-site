import React from 'react';
import styled from 'styled-components';
import SourceIcon from '../../../public/icon-source.svg';

const LinkContainer = styled.div`
  display: flex;
`;

const Source = styled.p`
  color: ${({ theme }) => theme.colors.whiteTransparent};
  font-size: 1.4rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.whiteTransparent};
  font-weight: bold;
  cursor: pointer;
  margin-left: 0.2rem;
  font-size: 1.4rem;
  text-decoration: underline;

  &::after {
    content: url(${SourceIcon});
    margin-left: 0.7rem;
  }
`;

const WikiLink = ({ url, ariaLabel }) => {
  return (
    <LinkContainer>
      <Source>Source :</Source>
      <Link target='blank' href={url} aria-label={ariaLabel}>
        Wikipedia
      </Link>
    </LinkContainer>
  );
};

export default WikiLink;
