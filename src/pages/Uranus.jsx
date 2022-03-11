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
import UranusImg from '../../public/planet-uranus.svg';
import UranusInternalImg from '../../public/planet-uranus-internal.svg';
import UranusGeoImg from '../../public/geology-uranus.png';
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

const UranusContainer = styled(PlanetContainer)`
  height: 45.8rem;
  width: 45.8rem;
  margin-top: 0rem;
`;

const UranusPlanet = styled(Planet)`
  height: 45.8rem;
  width: 45.8rem;
`;

const UranusGeology = styled(PlanetGeology)`
  top: 31rem;
  left: 14.8rem;
`;

const UranusOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.caribbeanGreen : 'transparent'};
`;

const UranusInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.caribbeanGreen : 'transparent'};
`;

const UranusSurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.caribbeanGreen : 'transparent'};
`;

const Uranus = () => {
  const [content, setContent] = useState(null);
  const [planetUrl, setPlanetUrl] = useState(null);
  const [btnOverviewActive, setBtnOverviewActive] = useState(false);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);
  const [planetImg, setPlanetImg] = useState(UranusImg);
  const [visibleGeo, setVisibleGeo] = useState(false);

  useEffect(() => {
    function fetchData() {
      setContent(APIData[6].overview.content);
      setPlanetUrl(APIData[6].overview.source);
      setBtnOverviewActive(true);
    }
    fetchData();
  }, [APIData]);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    setContent(APIData[6].overview.content);
    setPlanetUrl(APIData[6].overview.source);
    setPlanetImg(UranusImg);
    setVisibleGeo(false);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    setContent(APIData[6].structure.content);
    setPlanetUrl(APIData[6].structure.source);
    setPlanetImg(UranusInternalImg);
    setVisibleGeo(false);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    setContent(APIData[6].geology.content);
    setPlanetUrl(APIData[6].overview.source);
    setPlanetImg(UranusImg);
    setVisibleGeo(true);
  };

  return (
    <MainWrapper>
      <MainSection>
        <UranusContainer>
          <UranusPlanet src={planetImg} />
          <UranusGeology visibleGeo={visibleGeo} src={UranusGeoImg} />
        </UranusContainer>
        <PlanetContentContainer>
          <Heading>{APIData[6].name}</Heading>
          <PlanetContent>{content}</PlanetContent>
          <WikiLink
            url={`${planetUrl}`}
            ariaLabel='Link to Wikipedia article for Uranus'
          />
        </PlanetContentContainer>
        <ContentNavigationContainer>
          <UranusOverviewBtn
            btnOverviewActiveHandler={btnOverviewActiveHandler}
            active={btnOverviewActive}
          />
          <UranusInternalStructureBtn
            btnStructureActiveHandler={btnStructureActiveHandler}
            active={btnStructureActive}
          />
          <UranusSurfaceGeologyBtn
            btnGeologyActiveHandler={btnGeologyActiveHandler}
            active={btnGeologyActive}
          />
        </ContentNavigationContainer>
        <PlanetFactsContainer>
          <PlanetFactsCard>
            <PlanetFactsHeadingRotation />
            <PlanetFact>{APIData[6].rotation}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRevolution />
            <PlanetFact>{APIData[6].revolution}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingRadius />
            <PlanetFact>{APIData[6].radius}</PlanetFact>
          </PlanetFactsCard>
          <PlanetFactsCard>
            <PlanetFactsHeadingTemp />
            <PlanetFact>{APIData[6].temperature}</PlanetFact>
          </PlanetFactsCard>
        </PlanetFactsContainer>
      </MainSection>
    </MainWrapper>
  );
};

export default Uranus;
