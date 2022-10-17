import styled from 'styled-components';
import startGif from '../assets/start.gif';

const Container = styled.div`
  display: flex;
  /* align-items: center;
  justify-content: center; */
  scroll-snap-align: start;
  height: 100vh;
  width: 100%;
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const BackgroudGif = styled.img`
  height: 100%;
  width: 100%;
`;

const TextWapper = styled.div`
  position: absolute;
  font-size: 50px;
`;

const Artist = styled.div`
  font-weight: 400;
`;

const TitleItalic = styled.div`
  font-style: italic;
  font-weight: 900;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
`;

export default function MainScreen() {
  return (
    <Container>
      <TransparentCover />
      <BackgroudGif src={startGif}></BackgroudGif>
      <TextWapper>
        <Artist>Park Seo-Bo</Artist>
        <TitleItalic>Écriture</TitleItalic>
      </TextWapper>
    </Container>
  );
}
