import styled from 'styled-components';

const Button = styled.button`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${(props) =>
    props.active ? ({ theme }) => theme.colors.cerulean : 'transparent'};
  border: 0.1rem solid ${({ theme }) => theme.colors.darkGrey};
  width: 35rem;
  height: 4.8rem;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkGrey};
  }

  &::before {
    color: ${({ theme }) => theme.colors.whiteTransparent};
    margin: 0 2rem 0 2rem;
  }
`;

const ButtonOverview = styled(Button)`
  &::before {
    content: '01';
  }
`;

const ButtonInternal = styled(Button)`
  &::before {
    content: '02';
  }
`;

const ButtonGeology = styled(Button)`
  &::before {
    content: '03';
  }
`;

const PlanetContentNavigation = ({
  className,
  btnOverviewActive,
  btnStructureActive,
  btnGeologyActive,
  btnOverviewActiveHandler,
  btnStructureActiveHandler,
  btnGeologyActiveHandler,
}) => {
  return (
    <>
      <ButtonOverview
        active={btnOverviewActive}
        onClick={btnOverviewActiveHandler}
        className={className}
      >
        Overview
      </ButtonOverview>
      <ButtonInternal
        active={btnStructureActive}
        onClick={btnStructureActiveHandler}
        className={className}
      >
        Internal Structure
      </ButtonInternal>
      <ButtonGeology
        active={btnGeologyActive}
        onClick={btnGeologyActiveHandler}
        className={className}
      >
        Surface Geology
      </ButtonGeology>
    </>
  );
};

export default PlanetContentNavigation;
