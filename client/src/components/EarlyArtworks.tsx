import styled from 'styled-components';
import { earlyDescription } from '../assets/description';
import earlyBackground from '../assets/earlyBackground.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
`;

const Warpper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const Title = styled.span`
  position: absolute;
  top: 60px;
  font-size: 90px;
`;

const BackgroudImg = styled.img`
  height: 60%;
  object-fit: cover;
`;

const Description = styled.div`
  width: 50%;
  font-size: 15px;
  line-height: 1.8;
  text-align: justify;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

export default function LateArtworks() {
  return (
    <Container>
      <Warpper>
        <TransparentCover />
        <Title>EARLY ÉCRITURE</Title>
        <BackgroudImg src={earlyBackground} />
        <Description>{earlyDescription}</Description>
      </Warpper>
    </Container>
  );
}
