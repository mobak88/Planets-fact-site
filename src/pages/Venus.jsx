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
import VenusImg from '../../public/planet-venus.svg';
import VenusInternalImg from '../../public/planet-venus-internal.svg';
import VenusGeoImg from '../../public/geology-venus.png';
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

const VenusContainer = styled(PlanetContainer)`
  height: 40rem;
  width: 40rem;
  margin-top: 6rem;
`;

const VenusPlanet = styled(Planet)`
  height: 40rem;
  width: 40rem;
`;

const VenusGeology = styled(PlanetGeology)`
  top: 28rem;
  left: 11.85rem;
`;

const VenusOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.tulipTree : 'transparent'};
`;

const VenusInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.tulipTree : 'transparent'};
`;

const VenusSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.tulipTree : 'transparent'};
`;

const Venus = () => {
  const [content, setContent] = useState(null);
  const [planetUrl, setPlanetUrl] = useState(null);
  const [btnOverviewActive, setBtnOverviewActive] = useState(false);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(VenusImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  useEffect(() => {
    function fetchData() {
      setContent(APIData[1].overview.content);
      setPlanetUrl(APIData[1].overview.source);
      setBtnOverviewActive(true);
    }
    fetchData();
  }, [APIData]);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[1].overview.content);
    setPlanetUrl(APIData[1].overview.source);
    setPlanetImg(VenusImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[1].structure.content);
    setPlanetUrl(APIData[1].structure.source);
    setPlanetImg(VenusInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[1].geology.content);
    setPlanetUrl(APIData[1].overview.source);
    setPlanetImg(VenusImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <VenusContainer>
          <VenusPlanet src={planetImg} />
          <VenusGeology visibleGeo={visibleGeo} src={VenusGeoImg} />
        </VenusContainer>
        <PlanetContentContainer>
          <Heading>{APIData[1].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Venus'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <VenusOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <VenusInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <VenusSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[1].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[1].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[1].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[1].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Venus;
