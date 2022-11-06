import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ICategory } from '../atoms';
import LateArtworks from './LateArtworks';
import MidArtworks from './MidArtworks';
import EarlyArtworks from './EarlyArtworks';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  scroll-snap-align: start;
`;

const ToGalleryWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  top: 2rem;
  right: 2rem;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  color: #f5f5f5;
`;

const ToGalleryText = styled(motion.div)`
  font-size: 20px;
  font-weight: 500;
`;

const MotionToGalleryButton = styled(motion.div)`
  height: 18px;
`;

export default function ArtworkScreen({ category }: ICategory) {
  const navigate = useNavigate();

  const handleClick = (category: ICategory) => {
    navigate(`/${category}`);
  };

  return (
    <Container>
      {category === 'late' && <LateArtworks />}
      {category === 'mid' && <MidArtworks />}
      {category === 'early' && <EarlyArtworks />}
      <ToGalleryWrapper
        whileHover={{ scale: [null, 1.1, 1] }}
        onClick={() => handleClick(category as any)}
      >
        <ToGalleryText>Explore More</ToGalleryText>
        <MotionToGalleryButton
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FontAwesomeIcon
            style={{ height: '19px', width: '19px' }}
            icon={faAnglesRight}
          />
        </MotionToGalleryButton>
      </ToGalleryWrapper>
    </Container>
  );
}
