import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import endGif from '../assets/end.gif';

const Container = styled.div`
  border: 1px solid skyblue;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const Button = styled.button`
  position: absolute;
  margin: 100px;
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

export default function InfoScreen() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/exhibitions');
  };

  return (
    <Container>
      <TransparentCover />
      <Button onClick={handleClick}>To Exhibition</Button>
      <BackgroudGif src={endGif}></BackgroudGif>
    </Container>
  );
}
