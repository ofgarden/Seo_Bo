import styled from 'styled-components';
import { motion } from 'framer-motion';
import startGif from '../assets/start.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
`;

const TransparentCover = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const TextWapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  height: 100%;
  width: 100%;
`;

const TitleItalic = styled.div`
  font-style: italic;
  color: white;
  font-size: 110px;
  font-weight: 900;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
`;

const Artist = styled.div`
  color: white;
  font-size: 30px;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.5);
`;

const MotionArrowDown = styled(motion.div)`
  position: absolute;
  bottom: 110px;
  width: 100%;
  text-align: center;
`;

const FontAwesomeArrowDown = styled(FontAwesomeIcon)`
  height: 50px;
  color: rgba(255, 255, 255, 0.5);
`;

const BackgroudGif = styled.img`
  height: 100%;
  width: 100%;
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
      <BackgroudGif src={startGif}></BackgroudGif>
    </Container>
  );
}
