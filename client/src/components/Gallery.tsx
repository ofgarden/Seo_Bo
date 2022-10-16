import React, { useEffect, useState } from 'react';
import { fetchArtworks } from '../ArtworkService';
import { ICategory } from '../atoms';
import Artwork from './Artwork';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

interface IArtworks {
  category: string;
  title: string;
  medium: string;
  size: { height: number; width: number };
  year: number;
  imageUrl: string;
  _id: string;
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
  /* align-items: center; */
  border: 1px solid red;
`;

const HomeButton = styled.button`
  position: relative;
  top: 20px;
  height: 20px;
`;

const PrevButton = styled.button`
  width: 100px;
  position: relative;
  left: 50px;
`;

const NextButton = styled.button`
  width: 100px;
  position: relative;
  right: 50px;
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

  // console.log(artworksList.length); PRINTS 4
  // 전체 작품을 가져온 다음에 필터를 하는 거기 때문에.... 아
  // recoil 로 data 관리...?

  const handleNext = () => {
    setBack(false);
    setVisible((prev) => (prev === artworksList.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <Container>
      <PrevButton onClick={handlePrev}>prev</PrevButton>
      <MotionContainer>
        <HomeButton>HOME</HomeButton>
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
      <NextButton onClick={handleNext}>next</NextButton>
    </Container>
  );
}
