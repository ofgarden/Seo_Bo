import { useEffect, useState } from 'react';
import { fetchExhibitions } from '../ApiService';
import Map from './Map';

interface IExhibitions {
  title: string;
  begindate: number;
  enddate: number;
  venue: { name: string; address: string };
  location: { latitude: number; longitude: number };
  homepageUrl: string;
}

export default function Exhibitions() {
  const [exhibitionsList, setExhibitionList] = useState<IExhibitions[]>([]);

  useEffect(() => {
    fetchExhibitions().then((exhibitionsList) => {
      setExhibitionList(exhibitionsList);
    });
  }, []);
  console.log(exhibitionsList.map((exh) => exh.location));

  return (
    <>
      <div>map</div>
      {exhibitionsList.map((el) => (
        <Map location={el.location} />
      ))}
    </>
  );
}

// <>
//   {exhibitionsList.map((exhibition) => (
//     <div>{exhibition.title}</div>
//   ))}
//   <div>TODO: CURRENT EXHIBIITON</div>
//   <div>TODO: MAP</div>
//   <div>Exhibitions</div>;
// </>
