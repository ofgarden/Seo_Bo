import React, { useEffect, useState } from 'react';
import { fetchArtworks } from '../ArtworkService';
import { ICategory } from '../atoms';
import Artwork from './Artwork';

interface IArtworks {
  category: string;
  title: string;
  medium: string;
  size: { height: number; width: number };
  year: number;
  imageUrl: string;
  _id: string;
}

export default function Gallery({ category }: ICategory) {
  const [artworksList, setArtworksList] = useState<IArtworks[]>([]);

  useEffect(() => {
    fetchArtworks().then((artworkslist) => setArtworksList(artworkslist));
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      {artworksList
        .filter((artworks) => artworks.category === category)
        .map((artwork) => {
          return (
            <Artwork
              key={artwork._id}
              title={artwork.title}
              medium={artwork.medium}
              size={artwork.size}
              year={artwork.year}
              imageUrl={artwork.imageUrl}
            />
          );
          // <div>{artwork.title}</div>;
        })}

      {/* {artworks.map((artwork) => { */}
      {/* return ( */}
      {/* <> */}
      {/* {artwork.title} */}
      {/* <div>{artwork.medium}</div> */}
      {/* <>{artwork.size.height}</> */}
      {/* Type 'Number' is not assignable to type 'ReactNode'. -> <></> 이걸로 감싸면 된다.
       */}
      {/* </> */}
      {/* ); */}
      {/* })} */}
    </>
  );
}
