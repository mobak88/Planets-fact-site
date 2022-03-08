import React from 'react';
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

const MercuryMain = styled(MainSection)``;

const MercuryPlanet = styled(Planets)`
  background-image: url(${MercuryImg});
`;

const MercuryHeading = styled(Heading)``;

const MercuryContent = styled(PlanetContent)``;

const MercuryButton = styled(PlanetContentNavigation)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.cerulean};
  }
`;

const Mercury = () => {
  return (
    <MercuryMain>
      <MercuryPlanet></MercuryPlanet>
      <PlanetContentContainer>
        <MercuryHeading>Mercury</MercuryHeading>
        <MercuryContent>
          Mercury is the smallest planet in the Solar System and the closest to
          the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
          of all the Sun's planets. Mercury is one of four terrestrial planets
          in the Solar System, and is a rocky body like Earth.
        </MercuryContent>
        <WikiLink href={'https://en.wikipedia.org/wiki/Mercury_(element)'} />
      </PlanetContentContainer>
      <ContentNavigationContainer>
        <MercuryButton>Overview</MercuryButton>
        <MercuryButton>Internal Structure</MercuryButton>
        <MercuryButton>Surface Geology</MercuryButton>
      </ContentNavigationContainer>
    </MercuryMain>
  );
};

export default Mercury;
