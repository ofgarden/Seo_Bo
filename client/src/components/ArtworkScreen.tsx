import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ICategory } from '../atoms';
import { midDescription, earlyDescription } from '../assets/description';
import LateArtworks from './LateArtworks';

const ToGalleryWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  top: 15px;
  right: 30px;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  color: #f5f5f5;
`;

const ToGalleryText = styled(motion.div)`
  font-size: 15px;
  font-weight: 400;
`;

const MotionToGalleryButton = styled(motion.div)`
  height: 18px;
`;

const BackgroudImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: fill;
`;

const TransparentCover = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  width: 100%;
  height: 100vh;
  position: absolute;
`;

export default function ArtworkScreen({ category }: ICategory) {
  const navigate = useNavigate();

  const handleClick = (category: ICategory) => {
    navigate(`/${category}`);
  };

  return (
    <Container>
      <TransparentCover />
      {category === 'late' && (
        <>
          <LateArtworks />
          {/* <Description>{lateDescription}</Description>
          <BackgroudImg src={lateBackground}></BackgroudImg> */}
        </>
      )}
      {category === 'mid' && <Description>{midDescription}</Description>}
      {category === 'early' && <Description>{earlyDescription}</Description>}
      <ToGalleryWrapper
        whileHover={{ scale: [null, 1.1, 1] }}
        onClick={() => handleClick(category as any)}
      >
        <ToGalleryText>Explore More</ToGalleryText>
        <MotionToGalleryButton
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </MotionToGalleryButton>
      </ToGalleryWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  scroll-snap-align: start;
`;

const Description = styled.div`
  padding: 20px;
  line-height: 1.6;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  width: 50%;
  position: absolute;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  text-align: justify;
`;
