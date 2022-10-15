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

const BackButton = styled.button`
  position: relative;
  top: 20px;
  height: 20px;
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
    fetchArtworks().then((artworkslist) => setArtworksList(artworkslist));
    // console.log(artworksList.length); PRINTS 4
    // 전체 작품을 가져온 다음에 필터를 하는 거기 때문에.... 아
    // recoil 로 data 관리...?
  }, []);

  const handleNext = () => {
    setBack(false);
    setVisible((prev) =>
      prev === artworksList.length ? artworksList.length : prev + 1
    );
  };

  const handlePrev = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  // artworkList 을 recoil에서 관리하고
  // 각 상황에 맞게 map 해서 가공된 데이터를 만든 뒤
  // 그걸 여기에 가져와서 category props랑 비교하면 되지 않을끼?

  return (
    <Container>
      <button
        style={{ position: 'relative', left: '50px' }}
        onClick={handlePrev}
      >
        prev
      </button>
      <MotionContainer>
        <BackButton>HOME</BackButton>
        <AnimatePresence custom={back}>
          {artworksList
            .filter((artworks) => artworks.category === category)
            .map(
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
      <button
        style={{ position: 'relative', right: '50px' }}
        onClick={handleNext}
      >
        next
      </button>
    </Container>
  );
}
