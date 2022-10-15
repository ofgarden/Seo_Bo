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
  object-fit: cover;
  border: 1px solid blue;
`;

const ArtworkLabel = styled.div`
  width: 400px;
  height: 100px;
  border: 1px solid red;
`;

const LabelText = styled.div``;

export default function Artwork({ title, medium, imageUrl }: ArtworkProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid green',
      }}
    >
      <button style={{ height: '30px' }}>PREV</button>
      <div>
        <ArtworkImg src={imageUrl} />
        <ArtworkLabel>
          <span>{title}</span>
          <div>{medium}</div>
        </ArtworkLabel>
      </div>
      <button style={{ height: '30px' }}>NEXT</button>
    </div>
  );
}
