import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ICategory } from '../atoms';

const Container = styled.div`
  border: 1px solid skyblue;
  height: 100vh;
`;

export default function ArtworkScreen({ category }: ICategory) {
  let navigate = useNavigate();

  const handleClick = (category: ICategory) => {
    console.log('category', category);
    navigate(`/${category}`);
  };

  return (
    <Container>
      Screen2
      <button onClick={() => handleClick(category as any)}>
        To gallery component
      </button>
    </Container>
  );
}
