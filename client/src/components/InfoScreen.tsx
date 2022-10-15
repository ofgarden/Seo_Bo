import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid skyblue;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
`;

export default function InfoScreen() {
  return <Container></Container>;
}
