import styled from 'styled-components';
import { midDescription } from '../assets/description';
import midBackground from '../assets/midBackground.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const Warpper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1% 55% 41% 3%;
  grid-template-rows: 25% 25% 25% 25%;
`;

const Title = styled.span`
  grid-column: 3;
  grid-row: 1 / 3;
  align-self: center;
  justify-self: center;
  font-size: 90px;
  font-weight: 400;
  padding: 30px;
  @media (max-width: 1440px) {
    font-size: 50px;
  }
`;

const Description = styled.div`
  grid-column: 3;
  grid-row: 2 / 5;
  padding: 30px;
  line-height: 1.8;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: justify;
  align-self: center;
  border-radius: 20px;
  @media (max-width: 1440px) {
    font-size: 12px;
  }
`;

const BackgroudImg = styled.img`
  grid-column: 2;
  grid-row: 1 / 5;
  align-self: center;
  justify-self: center;
  max-height: 80%;
  @media (max-width: 820px) {
    max-width: 90%;
  }
`;

export default function LateArtworks() {
  return (
    <Container>
      <Warpper>
        <TransparentCover />
        <BackgroudImg src={midBackground} />
        <Title>MID ÉCRITURE</Title>
        <Description>{midDescription}</Description>
      </Warpper>
    </Container>
  );
}
