import styled from 'styled-components';
import { lateDescription } from '../assets/description';
import lateBackground from '../assets/lateBackground.jpeg';

const BackgroudImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;
const Description = styled.div`
  padding: 20px;
  line-height: 1.6;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
  width: 50%;
  position: absolute;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: justify;
  bottom: 40px;
  right: 40px;
`;
const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export default function LateArtworks() {
  return (
    <Container style={{ position: 'absolute', border: '1px solid red' }}>
      <TransparentCover />
      <Description>{lateDescription}</Description>
      <BackgroudImg src={lateBackground}></BackgroudImg>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid skyblue;
  height: 100vh;
  width: 100%;
  position: relative;
`;
