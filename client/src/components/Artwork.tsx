import styled from 'styled-components';

interface ArtworkProps {
  title: string;
  medium: string;
  size: { height: number; width: number };
  year: number;
  imageUrl: string;
}

const ArtworkImg = styled.img`
  height: 300px;
  width: 400px;
  object-fit: contain;
`;

export default function Artwork({ title, medium, imageUrl }: ArtworkProps) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid black',
        }}
      >
        <ArtworkImg src={imageUrl}></ArtworkImg>
        <span>{title}</span>
        <div>{medium}</div>
      </div>
    </>
  );
}
