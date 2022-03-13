import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import APIData from '../APIData';
import MainWrapper from '../components/main/MainWrapper';
import PlanetContainer from '../components/planets/PlanetContainer';
import MainSection from '../components/main/MainSection';
import Heading from '../components/headings/Heading';
import PlanetContent from '../components/planetContent/PlanetContent';
import PlanetContentContainer from '../components/planetContent/planetContentContainer/PlanetContentContainer';
import ContentNavigationContainer from '../components/planetContentNavigation/ContentNavigationContainer';
import OverviewBtn from '../components/planetContentNavigation/OverviewBtn';
import InternalStructureBtn from '../components/planetContentNavigation/InternalStructureBtn';
import SurfaceGeologyBtn from '../components/planetContentNavigation/SurfaceGeologyBtn';
import WikiLink from '../components/wikiLink/WikiLink';
import JupiterImg from '../../public/planet-jupiter.svg';
import JupiterInternalImg from '../../public/planet-jupiter-internal.svg';
import JupiterGeoImg from '../../public/geology-jupiter.png';
import PlanetFactsContainer from '../components/PlanetFactsCard/PlanetFactsContainer';
import PlanetFactsCard from '../components/PlanetFactsCard/PlanetFactsCard';
import {
  PlanetFactsHeadingRotation,
  PlanetFactsHeadingRevolution,
  PlanetFactsHeadingRadius,
  PlanetFactsHeadingTemp,
} from '../components/PlanetFactsCard/PlanetFactsHeading';
import PlanetFact from '../components/PlanetFactsCard/PlanetFact';
import Planet from '../components/planets/Planet';
import PlanetGeology from '../components/planets/PlanetGeology';

const JupiterContainer = styled(PlanetContainer)`
  height: 58.2rem;
  width: 58.2rem;
  margin-top: 0rem;
`;

const JupiterPlanet = styled(Planet)`
  height: 58.2rem;
  width: 58.2rem;
`;

const JupiterGeology = styled(PlanetGeology)`
  top: 37rem;
  left: 20.9rem;
`;

const JupiterOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bloodMoon : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bloodMoon};
    }
  }
`;

const JupiterInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bloodMoon : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bloodMoon};
    }
  }
`;

const JupiterSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.bloodMoon : 'transparent'};

  @media screen and (max-width: 1165px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.bloodMoon};
    }
  }
`;

const Jupiter = () => {
  const [content, setContent] = useState(null);
  const [planetUrl, setPlanetUrl] = useState(null);
  const [btnOverviewActive, setBtnOverviewActive] = useState(false);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(JupiterImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  useEffect(() => {
    function fetchData() {
      setContent(APIData[4].overview.content);
      setPlanetUrl(APIData[4].overview.source);
      setBtnOverviewActive(true);
    }
    fetchData();
  }, [APIData]);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[4].overview.content);
    setPlanetUrl(APIData[4].overview.source);
    setPlanetImg(JupiterImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[4].structure.content);
    setPlanetUrl(APIData[4].structure.source);
    setPlanetImg(JupiterInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[4].geology.content);
    setPlanetUrl(APIData[4].overview.source);
    setPlanetImg(JupiterImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <JupiterContainer>
          <JupiterPlanet src={planetImg} />
          <JupiterGeology visibleGeo={visibleGeo} src={JupiterGeoImg} />
        </JupiterContainer>
        <PlanetContentContainer>
          <Heading>{APIData[4].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Jupiter'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <JupiterOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <JupiterInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <JupiterSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[4].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[4].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[4].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[4].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Jupiter;
