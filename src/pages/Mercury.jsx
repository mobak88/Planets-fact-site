import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Planets from '../components/planets/Planets';
import MainSection from '../components/main/MainSection';
import Heading from '../components/headings/Heading';
import PlanetContent from '../components/planetContent/PlanetContent';
import PlanetContentContainer from '../components/planetContentContainer/PlanetContentContainer';
import PlanetContentNavigation from '../components/planetContentNavigation/PlanetContentNavigation';
import ContentNavigationContainer from '../components/planetContentNavigation/ContentNavigationContainer';
import WikiLink from '../components/wikiLink/WikiLink';
import MercuryImg from '../../public/planet-mercury.svg';

const MercuryPlanet = styled(Planets)`
  background-image: url(${MercuryImg});
`;

const MercuryButtonOverview = styled(PlanetContentNavigation)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.cerulean};
  }

  &::before {
    color: ${({ theme }) => theme.colors.lightGrey};
    content: '01';
    margin: 0 2rem 0 2rem;
  }
`;
const MercuryButtonInternal = styled(PlanetContentNavigation)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.cerulean};
  }

  &::before {
    color: ${({ theme }) => theme.colors.lightGrey};
    content: '02';
    margin: 0 2rem 0 2rem;
  }
`;
const MercuryButtonGeology = styled(PlanetContentNavigation)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.cerulean};
  }

  &::before {
    color: ${({ theme }) => theme.colors.lightGrey};
    content: '03';
    margin: 0 2rem 0 2rem;
  }
`;

const Mercury = () => {
  const JSONData = '../../data.json';
  const [content, setContent] = useState(null);
  const [planetUrl, setPlanetUrl] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(JSONData);
        const data = await response.json();
        setContent(data[0].overview.content);
        setPlanetUrl(data[0].overview.source);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [content]);

  return (
    <MainSection>
      <MercuryPlanet></MercuryPlanet>
      <PlanetContentContainer>
        <Heading>Mercury</Heading>
        <PlanetContent>{content}</PlanetContent>
        <WikiLink
          url={`${planetUrl}`}
          ariaLabel='Link to WIkipedia article for Mercury'
        />
      </PlanetContentContainer>
      <ContentNavigationContainer>
        <MercuryButtonOverview>Overview</MercuryButtonOverview>
        <MercuryButtonInternal>Internal Structure</MercuryButtonInternal>
        <MercuryButtonGeology>Surface Geology</MercuryButtonGeology>
      </ContentNavigationContainer>
    </MainSection>
  );
};

export default Mercury;
