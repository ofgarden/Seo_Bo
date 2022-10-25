import styled from 'styled-components';
import MainScreen from './MainScreen';
import ArtworkScreen from './ArtworkScreen';
import InfoScreen from './InfoScreen';

const Container = styled.div`
  scroll-snap-align: start;
  font-family: poppins;
`;

export default function Home() {
  return (
    <Container>
      <MainScreen />
      <ArtworkScreen category={'late'} />
      <ArtworkScreen category={'mid'} />
      <ArtworkScreen category={'early'} />
      <InfoScreen />
    </Container>
  );
}
