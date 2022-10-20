import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import endGif from '../assets/end.gif';

const Container = styled.div`
  border: 1px solid skyblue;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

export default function InfoScreen() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/exhibitions');
  };

  return (
    <Container>
      <button onClick={handleClick}>To Exhibition</button>
    </Container>
  );
}
