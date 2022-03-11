import React from 'react';
import styled from 'styled-components';

const GeologyImg = styled.img`
  width: 16.3rem;
  height: 19.9rem;
  position: absolute;
  top: 22.5rem;
  left: 6.4rem;
  display: ${(props) => (props.visible ? 'block' : 'none')}; ;
`;

const PlanetGeology = ({ src, visibleGeo }) => {
  return <GeologyImg visible={visibleGeo} src={src} />;
};

export default PlanetGeology;
