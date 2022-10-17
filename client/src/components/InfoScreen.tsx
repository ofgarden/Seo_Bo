import styled from 'styled-components';
import endGif from '../assets/end.gif';

const Container = styled.div`
  border: 1px solid skyblue;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export default function InfoScreen() {
  return (
    <Container>
      <button>To Exhibition</button>
    </Container>
  );
}
