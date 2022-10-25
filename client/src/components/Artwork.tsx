import styled from 'styled-components';

interface ArtworkProps {
  title: string;
  medium: string;
  size: { height: number; width: number };
  year: number;
  imageUrl: string;
}

const ArtworkImg = styled.img`
  max-height: 550px;
  width: 700px;
  object-fit: contain;
`;

const ArtworkLabel = styled.div`
  height: 100px;
  width: 700px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 15px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Details = styled.div`
  margin-top: 7px;
  font-size: 15px;
`;

export default function Artwork({
  title,
  medium,
  imageUrl,
  size,
  year,
}: ArtworkProps) {
  return (
    <>
      <ArtworkImg src={imageUrl} />
      <ArtworkLabel>
        <Title>{title}</Title>
        <Details>
          {medium}, {size.height} x {size.width} cm, {year}
        </Details>
      </ArtworkLabel>
    </>
  );
}
