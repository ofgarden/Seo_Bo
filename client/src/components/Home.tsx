import { motion, useScroll, useMotionValue, useTransform } from 'framer-motion';
import SideIndicator from './SideIndicator';
import MainScreen from './MainScreen';
import ArtworkScreen from './ArtworkScreen';
import InfoScreen from './InfoScreen';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type ChangeColorTestProps = {
  primary: boolean;
};

const ChangeColorTest = styled.div<ChangeColorTestProps>`
  /* display: none; */
  background-color: ${(props) => (props.primary ? 'blue' : 'black')};
`;

export default function Home() {
  const [position, setPosition] = useState<number>(0);
  const [viewHeight, setViewHeight] = useState<number>(0);

  const [visible, setVisible] = useState(false);

  // const scrollRef = useRef<HTMLDivElement>(null);
  const indicator = useRef<HTMLDivElement>(null);
  const sectionFirst = useRef<HTMLDivElement>(null);
  const sectionSecond = useRef<HTMLDivElement>(null);
  const sectionThird = useRef<HTMLDivElement>(null);
  const sectionFourth = useRef<HTMLDivElement>(null);

  // console.log('indicator: ', indicator.current?.getBoundingClientRect());
  // console.log('First: ', sectionFirst.current?.getBoundingClientRect());
  // console.log('Second: ', sectionSecond.current?.getBoundingClientRect());
  // console.log('Third: ', sectionThird.current?.getBoundingClientRect());
  // console.log('Fourth: ', sectionFourth.current?.getBoundingClientRect());

  // const test = sectionThird.current?.getBoundingClientRect().top;

  // FIX 되어 있는 height 값 (기준이 될것))

  // const { innerHeight: height } = window;
  // console.log('window height', height);

  // useEffect(() => {
  //   console.log('position', position);
  //   setViewHeight(height);
  //   console.log('viewHeight', viewHeight);
  // }, [height, position, viewHeight]);

  // const handleScroll = () => {
  //   const scrollYValue = Math.round(window.scrollY);
  //   setPosition(scrollYValue);
  //   if (scrollYValue >= 900) {
  //     setVisible(true);
  //   } else {
  //     setVisible(false);
  //   }
  // };

  // window.addEventListener('scroll', handleScroll);

  return (
    // <SideIndicator />
    <div>
      {/* {visible && (
        <div
          style={{
            position: 'sticky',
            top: '0',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '30px',
            height: '100vh',
            width: '150px',
          }}
        >
          <ChangeColorTest primary>Park Seo-bo</ChangeColorTest>
          <div>Late-Écriture</div>
          <div>Mid-Écriture</div>
          <div>Early-Écriture</div>
          <div>Current</div>
        </div>
      )} */}

      <div style={{ scrollSnapAlign: 'start', fontFamily: 'poppins' }}>
        <div>
          <MainScreen />
        </div>
        <div ref={sectionFirst}>
          <ArtworkScreen category={'late'} />
        </div>
        <div ref={sectionSecond}>
          <ArtworkScreen category={'mid'} />
        </div>
        <div ref={sectionThird}>
          <ArtworkScreen category={'early'} />
        </div>
        <div ref={sectionFourth}>
          <InfoScreen />
        </div>
      </div>
    </div>
  );
}
