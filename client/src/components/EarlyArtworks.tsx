import styled from 'styled-components';
import { earlyDescription } from '../assets/description';
import earlyBackground from '../assets/earlyBackground.jpeg';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  gap: 1.5%;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Title = styled.span`
  font-size: 6.5rem;
  font-weight: 400;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 5.5rem;
  }

  @media (max-width: 700px) {
    font-size: 2.5rem;
  }
`;

const Year = styled.span`
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

const BackgroudImg = styled.img`
  max-height: 50%;
  max-width: 50%;
  object-fit: cover;
`;

const Description = styled.div`
  max-width: 45%;
  text-align: justify;
  font-size: 1.5rem;
  line-height: 1.8;

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
      <Title>
        EARLY Écriture <Year>1950s - 1970s </Year>
      </Title>
      <BackgroudImg src={earlyBackground} />
      <Description>{earlyDescription}</Description>
    </Container>
  );
}
