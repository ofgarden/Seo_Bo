import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faHouseChimney,
} from '@fortawesome/free-solid-svg-icons';
import { fetchArtworks } from '../ApiService';
import { ICategory } from '../atoms';
import Artwork from './Artwork';

interface IArtworks {
  category: string;
  title: string;
  medium: string;
  size: { height: number; width: number };
  year: number;
  imageUrl: string;
  _id: string;
}

export default function Gallery({ category }: ICategory) {
  const [artworksList, setArtworksList] = useState<IArtworks[]>([]);
  const [visible, setVisible] = useState(0);
  const [back, setBack] = useState(false);

  useEffect(() => {
    fetchArtworks().then((artworkslist) =>
      setArtworksList(
        artworkslist.filter(
          (artworks: IArtworks) => artworks.category === category
        )
      )
    );
  }, [category]);

  let navigate = useNavigate();
  const handleHome = () => {
    navigate(-1);
  };

  const handlePrev = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? artworksList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setBack(false);
    setVisible((prev) => (prev === artworksList.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container>
      <FontAwesomeHomeButton icon={faHouseChimney} onClick={handleHome} />
      <FontAwesomePrevNextButton icon={faChevronLeft} onClick={handlePrev} />
      <MotionContainer>
        <AnimatePresence custom={back}>
          {artworksList.map(
            (artwork, i) =>
              i === visible && (
                <MotionArtwork
                  key={i}
                  custom={back}
                  variants={motionArtwork}
                  initial="entry"
                  animate="show"
                  exit="exit"
                >
                  <Artwork
                    title={artwork.title}
                    medium={artwork.medium.toLowerCase()}
                    size={artwork.size}
                    year={artwork.year}
                    imageUrl={artwork.imageUrl}
                  />
                </MotionArtwork>
              )
          )}
        </AnimatePresence>
      </MotionContainer>
      <FontAwesomePrevNextButton icon={faChevronRight} onClick={handleNext} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: whitesmoke;
`;

const MotionContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const FontAwesomePrevNextButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  align-self: center;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 150px;
  color: lightgrey;
  font-size: 40px;
`;

const FontAwesomeHomeButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  height: 20px;
  top: 20px;
  left: 50px;
  position: absolute;
  color: lightgrey;
`;

const MotionArtwork = styled(motion.div)`
  position: absolute;
  align-self: center;
`;

const motionArtwork = {
  entry: (back: boolean) => ({
    x: back ? -600 : 600,
    opacity: 0,
    scale: 0,
  }),
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 600 : -600,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.8,
    },
  }),
};
