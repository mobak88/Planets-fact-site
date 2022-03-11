import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Planets from '../components/planets/Planets';
import MainSection from '../components/main/MainSection';
import Heading from '../components/headings/Heading';
import PlanetContent from '../components/planetContent/PlanetContent';
import PlanetContentContainer from '../components/planetContentContainer/PlanetContentContainer';
import ContentNavigationContainer from '../components/planetContentNavigation/ContentNavigationContainer';
import OverviewBtn from '../components/planetContentNavigation/OverviewBtn';
import InternalStructureBtn from '../components/planetContentNavigation/InternalStructureBtn';
import SurfaceGeologyBtn from '../components/planetContentNavigation/SurfaceGeologyBtn';
import WikiLink from '../components/wikiLink/WikiLink';
import MercuryImg from '../../public/planet-mercury.svg';
import APIData from '../../APIData';

const MercuryPlanet = styled(Planets)`
  background-image: url(${MercuryImg});
`;

const MercuryOverviewBtn = styled(OverviewBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};
`;

const MercuryInternalStructureBtn = styled(InternalStructureBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};
`;

const MercurySurfaceGeologyBtn = styled(SurfaceGeologyBtn)`
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};
`;

const Mercury = () => {
  const JSONData = '../../data.json';
  const [content, setContent] = useState(null);
  const [planetUrl, setPlanetUrl] = useState(null);
  const [btnOverviewActive, setBtnOverviewActive] = useState(false);
  const [btnStructureActive, setBtnStructureActive] = useState(false);
  const [btnGeologyActive, setBtnGeologyActive] = useState(false);

  useEffect(() => {
    function fetchData() {
      setContent(APIData[0].overview.content);
      setPlanetUrl(APIData[0].overview.source);
      setBtnOverviewActive(true);
    }
    fetchData();
  }, [APIData]);

  const btnOverviewActiveHandler = () => {
    setBtnOverviewActive(true);
    setBtnStructureActive(false);
    setBtnGeologyActive(false);

    async function fetchData(API) {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setContent(data[0].overview.content);
        setPlanetUrl(data[0].overview.source);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(JSONData);
  };

  const btnStructureActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(true);
    setBtnGeologyActive(false);

    async function fetchData(API) {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setContent(data[0].structure.content);
        setPlanetUrl(data[0].structure.source);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(JSONData);
  };

  const btnGeologyActiveHandler = () => {
    setBtnOverviewActive(false);
    setBtnStructureActive(false);
    setBtnGeologyActive(true);

    async function fetchData(API) {
      try {
        const response = await fetch(API);
        const data = await response.json();
        setContent(data[0].geology.content);
        setPlanetUrl(data[0].geology.source);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData(JSONData);
  };

  return (
    <MainSection>
      <MercuryPlanet></MercuryPlanet>
      <PlanetContentContainer>
        <Heading>{APIData[0].name}</Heading>
        <PlanetContent>{content}</PlanetContent>
        <WikiLink
          url={`${planetUrl}`}
          ariaLabel='Link to Wikipedia article for Mercury'
        />
      </PlanetContentContainer>
      <ContentNavigationContainer>
        <MercuryOverviewBtn
          btnOverviewActiveHandler={btnOverviewActiveHandler}
          active={btnOverviewActive}
        />
        <MercuryInternalStructureBtn
          btnStructureActiveHandler={btnStructureActiveHandler}
          active={btnStructureActive}
        />
        <MercurySurfaceGeologyBtn
          btnGeologyActiveHandler={btnGeologyActiveHandler}
          active={btnGeologyActive}
        />
      </ContentNavigationContainer>
    </MainSection>
  );
};

export default Mercury;
