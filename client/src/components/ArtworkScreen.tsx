import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ICategory } from '../atoms';
import {
  lateDescription,
  midDescription,
  earlyDescription,
} from '../assets/description';

export default function ArtworkScreen({ category }: ICategory) {
  let navigate = useNavigate();

  const handleClick = (category: ICategory) => {
    navigate(`/${category}`);
  };

  return (
    <Container>
      {category === 'late' && <Description>{lateDescription}</Description>}
      {category === 'mid' && <Description>{midDescription}</Description>}
      {category === 'early' && <Description>{earlyDescription}</Description>}
      <button
        style={{ position: 'absolute' }}
        onClick={() => handleClick(category as any)}
      >
        To gallery component
      </button>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid skyblue;
  height: 100vh;
  width: 100vw;
  position: relative;
  scroll-snap-align: start;
`;

const Description = styled.div`
  border: 1px solid blue;
  /* height: 100px; */
  width: 500px;
  position: absolute;
`;
