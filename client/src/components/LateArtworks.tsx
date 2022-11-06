import styled from 'styled-components';
import { lateDescription } from '../assets/description';
import lateBackground from '../assets/lateBackground.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  justify-content: center;
  /* position: absolute; */
`;

const GirdWarpper = styled.div`
  display: grid;
  grid-template-columns: 15% 70% 15%;
  height: 100vh;
  /* max-width: 100vw; */
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 70%;
  height: 65%;

  @media (max-width: 1000px) {
    height: 30%;
  }

  @media (max-width: 500px) {
    height: 10%;
  }
`;

const ArtworkImg = styled.img`
  height: 100%;
  object-fit: contain;

  @media (max-width: 500px) {
    height: 10%;
  }
`;

const Title = styled.div`
  font-size: 6.5rem;
  font-weight: 400;
  writing-mode: vertical-rl;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    font-size: 5.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

const Year = styled.div`
  font-size: 3.5rem;
  font-style: italic;
  font-weight: 900;
  writing-mode: vertical-rl;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Description = styled.div`
  max-width: 70%;
  line-height: 1.8;
  font-size: 1.5rem;
  text-align: justify;

  @media (max-width: 500px) {
    font-size: 0.8rem;
    border: 5px solid red;
  }
`;

export default function LateArtworks() {
  return (
    <Container>
      {/* <GirdWarpper> */}
      {/* <TransparentCover /> */}
      <Wrapper>
        <ArtworkImg src={lateBackground} />
        <Year>1990 - Present</Year>
        <Title>LATE Écriture</Title>
      </Wrapper>
      <Description>{lateDescription}</Description>
      {/* </GirdWarpper> */}
    </Container>
  );
}
