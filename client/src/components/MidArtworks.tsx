import styled from 'styled-components';
import { midDescription } from '../assets/description';
import midBackground from '../assets/midBackground.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 1.5%;
  padding-bottom: 1.5%;
  justify-content: center;
`;

const GridWrapper = styled.div`
  padding-top: 3%;
  padding-bottom: 3%;
  display: grid;
  grid-template-columns: 15% 35% 35% 15%;
  gap: 1.5%;
`;

const TextWrapper = styled.div`
  grid-column: 3;
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  @media (max-width: 1000px) {
    align-self: center;
  }

  @media (max-width: 500px) {
    align-self: center;
  }
`;

const BackgroudImg = styled.img`
  grid-column: 2;
  max-width: 100%;
  align-self: center;
  justify-self: center;

  @media (max-width: 820px) {
    max-width: 90%;
  }
`;

const Title = styled.span`
  font-size: 6.5rem;
  font-weight: 400;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    font-size: 5.5rem;
  }

  /* @media (max-width: 00px) {
    font-size: 2.5rem;
  } */

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Year = styled.div`
  font-size: 3.5rem;
  font-style: italic;
  font-weight: 900;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

const Description = styled.div`
  font-size: 1.5rem;
  line-height: 1.8;
  text-align: justify;
  border-radius: 20px;

  @media (max-width: 1000px) {
    font-size: 1rem;
  }

  @media (max-width: 700px) {
    font-size: 0.8rem;
  }
`;

export default function LateArtworks() {
  return (
    <Container>
      <GridWrapper>
        <BackgroudImg src={midBackground} />
        <TextWrapper>
          <Title>
            MID Écriture <Year>1980s - 1990s</Year>
          </Title>
          <Description>{midDescription}</Description>
        </TextWrapper>
      </GridWrapper>
    </Container>
  );
}
