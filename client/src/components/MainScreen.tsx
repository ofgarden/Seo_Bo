import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid skyblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

export default function MainScreen() {
  return (
    <Container>
      Screen1: MAIN DRAWING
      <div>TODO: 부드럽게 넘어가기 </div>
      <div>TODO: 상태창 </div>
      <div>TODO: 타임라인? </div>
    </Container>
  );
}
