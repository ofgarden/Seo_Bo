import styled from 'styled-components';

interface ArtworkProps {
  title: string;
  medium: string;
  size: { height: number; width: number };
  year: number;
  imageUrl: string;
}

// responsive
const ArtworkImg = styled.img`
  width: 700px;
  max-height: 550px;
  object-fit: contain;
  /* border-radius: 15px; */
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
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{title}</div>
        <div style={{ fontSize: '15px', marginTop: '7px' }}>
          {medium}, {size.height} x {size.width} cm, {year}
        </div>
      </ArtworkLabel>
    </>
  );
}
