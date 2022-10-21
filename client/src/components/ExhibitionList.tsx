import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from '../assets/Freepik-maps-and-flags.png';
import { fetchExhibitions } from '../ApiService';
import Exhibition from './Exhibition';

interface IExhibitions {
  title: string;
  begindate: number;
  enddate: number;
  venue: { name: string; address: string };
  location: { latitude: number; longitude: number };
  homepageUrl: string;
  _id: string;
}

const containerStyle = {
  width: '600px',
  height: '400px',
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ExhibitionGrid = styled.div`
  grid-column: 1;
`;

const MapGrid = styled.div`
  display: grid;
  grid-column: 2;
  place-items: center;
`;

const Title = styled.div`
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 500;
`;

export default function ExhibitionList() {
  const [exhibitionsList, setExhibitionList] = useState<IExhibitions[]>([]);

  useEffect(() => {
    fetchExhibitions().then((exhibitionsList) => {
      setExhibitionList(exhibitionsList);
    });
  }, []);

  const markerIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [15, 15],
  });

  return (
    <div style={{ padding: '50px', fontFamily: 'poppins' }}>
      {/* TODO: STYLED COMPNENT => TITLE */}
      <Title>CURRENT EXHIBITIONS</Title>

      <Wrapper>
        <ExhibitionGrid>
          {exhibitionsList.map((el) => (
            <Exhibition key={el._id} {...el} />
          ))}
        </ExhibitionGrid>

        <MapGrid>
          <MapContainer
            style={containerStyle}
            center={[37.55016493582849, 127.00085620706102]}
            zoom={2}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {exhibitionsList.map((el, i) => (
              <div key={i}>
                <Marker
                  position={[el.location.latitude, el.location.longitude]}
                  icon={markerIcon}
                >
                  <Popup>{el.title}</Popup>
                </Marker>
              </div>
            ))}
          </MapContainer>
        </MapGrid>
      </Wrapper>
    </div>
  );
}
