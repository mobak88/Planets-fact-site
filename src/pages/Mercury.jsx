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
import APIData from '../../APIData';

const MercuryPlanet = styled(Planets)`
  background-image: url(${MercuryImg});
`;

const MercuryButton = styled(PlanetContentNavigation)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const Mercury = ({ active }) => {
  const JSONData = '../../data.json';
  const [content, setContent] = useState(null);
  const [planetUrl, setPlanetUrl] = useState(null);
  const [btnOverviewActive, setBtnOverviewActive] = useState(false);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive((active = true));
    setBtnStructureActive((active = false));
    setBtnGeologyActive((active = false));
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive((active = false));
    setBtnStructureActive((active = true));
    setBtnGeologyActive((active = false));
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive((active = false));
    setBtnStructureActive((active = false));
    setBtnGeologyActive((active = true));
  };

  useEffect(() => {
    async function fetchData(API) {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setContent(data[0].overview.content);
        setPlanetUrl(data[0].overview.source);
        setBtnOverviewActive((active = true));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(JSONData);
  }, [JSONData]);

  return (
    <MainSection>
      <MercuryPlanet></MercuryPlanet>
      <PlanetContentContainer>
        <Heading>{APIData[0].name}</Heading>
        <PlanetContent>{content}</PlanetContent>
        <WikiLink
          url={`${planetUrl}`}
          ariaLabel='Link to WIkipedia article for Mercury about the planet'
        />
      </PlanetContentContainer>
      <ContentNavigationContainer>
        <MercuryButton
          btnOverviewActiveHandler={btnOverviewActiveHandler}
          btnStructureActiveHandler={btnStructureActiveHandler}
          btnGeologyActiveHandler={btnGeologyActiveHandler}
          btnOverviewActive={btnOverviewActive}
          btnStructureActive={btnStructureActive}
          btnGeologyActive={btnGeologyActive}
        />
      </ContentNavigationContainer>
    </MainSection>
  );
};

export default Mercury;
