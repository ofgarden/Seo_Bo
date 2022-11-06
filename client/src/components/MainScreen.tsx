import styled from 'styled-components';
import { motion } from 'framer-motion';
import startGif from '../assets/start.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  height: 100vh;
  /* width: 100%; */
  scroll-snap-align: start;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
  position: absolute;
`;

const TextWapper = styled.div`
  position: absolute;
`;

const TitleItalic = styled.div`
  font-style: italic;
  font-size: 120px;
  font-weight: 900;
  color: rgb(255, 255, 255);
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 390px) {
    font-size: 70px;
  }
`;

const Artist = styled.div`
  font-size: 65px;
  color: rgb(255, 255, 255);
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 390px) {
    font-size: 38px;
  }
`;

const MotionArrowDown = styled(motion.div)`
  position: absolute;
  bottom: 12%;
`;

const FontAwesomeArrowDown = styled(FontAwesomeIcon)`
  height: 50px;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 390px) {
    height: 40px;
  }
`;

const BackgroudGif = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

export default function MainScreen() {
  return (
    <Container>
      <TransparentCover />
      <TextWapper>
        <TitleItalic>Écriture</TitleItalic>
        <Artist>PARK SEO-BO</Artist>
      </TextWapper>
      <MotionArrowDown
        animate={{ y: [50, 60, 50] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FontAwesomeArrowDown icon={faAnglesDown} />
      </MotionArrowDown>
      <BackgroudGif src={startGif} />
    </Container>
  );
}
