import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import endGif from '../assets/end.gif';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Button = styled.button`
  height: 100px;
  width: 100px;
  margin: 30px;
  display: flex;
  align-items: center;
  position: absolute;
  border: none;
  border-radius: 50px;
  font-family: poppins;
  background-color: rgba(255, 255, 255, 0.5);
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
      <Button onClick={handleClick}>Current Exhibition</Button>
      <BackgroudGif src={endGif} />
    </Container>
  );
}
