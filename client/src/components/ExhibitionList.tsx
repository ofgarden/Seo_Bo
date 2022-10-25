import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
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
  width: '500px',
  height: '500px',
};

const Container = styled.div`
  padding: 50px;
  font-family: poppins;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 500;
`;

const FontAwesomeHomeButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: lightgrey;
  align-self: center;
  margin-right: 50px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 10% 45%;
`;

const ExhibitionGrid = styled.div`
  grid-column: 1;
`;

const MapGrid = styled.div`
  display: grid;
  grid-column: 3;
  place-items: center;
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

  let navigate = useNavigate();
  const handleHome = () => {
    navigate(-1);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>CURRENT EXHIBITIONS</Title>
        <FontAwesomeHomeButton icon={faHouseChimney} onClick={handleHome} />
      </TitleWrapper>
      <Wrapper>
        <ExhibitionGrid>
          {exhibitionsList
            .filter((el) => new Date(el.enddate) >= new Date())
            .sort(
              (a, b) =>
                new Date(a.enddate).getTime() - new Date(b.enddate).getTime()
            )
            .map((el) => (
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
    </Container>
  );
}
