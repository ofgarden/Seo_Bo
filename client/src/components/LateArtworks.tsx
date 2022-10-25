import styled from 'styled-components';
import { lateDescription } from '../assets/description';
import lateBackground from '../assets/lateBackground.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const Warpper = styled.div`
  display: grid;
  grid-template-columns: 1% 88% 10% 1%;
  height: 100vh;
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const BackgroudImg = styled.img`
  align-self: center;
  justify-self: center;
  grid-column: 2;
  width: 60%;
`;

const Title = styled.span`
  padding-top: 20px;
  grid-column: 3;
  align-self: center;
  font-size: 90px;
  font-weight: 400;
  writing-mode: vertical-rl;
`;

const Description = styled.div`
  grid-column: 2;
  line-height: 1.8;
  padding-left: 10px;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: justify;
  align-self: center;
`;

export default function LateArtworks() {
  return (
    <Container>
      <Warpper>
        <TransparentCover />
        <BackgroudImg src={lateBackground} />
        <Title>LATE ÉCRITURE</Title>
        <Description>{lateDescription}</Description>
      </Warpper>
    </Container>
  );
}
