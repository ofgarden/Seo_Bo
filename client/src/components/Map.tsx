import React, { useState, useCallback, useMemo } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  useLoadScript,
  InfoWindow,
} from '@react-google-maps/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const containerStyle = {
  width: '400px',
  height: '400px',
};

// OR, useMemo inside component
const center = {
  lat: 37.55016493582849,
  lng: 127.00085620706102,
};

interface ILocation {
  location: object;
}

// Whole information about exhibition
// Marekr
// onClikc => infoWindow

function Map({ location }: ILocation) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY as string,
  });

  if (!isLoaded) return <div>Loading...</div>;

  console.log('location', location);

  return (
    <>
      <GoogleMap zoom={7} center={center} mapContainerStyle={containerStyle}>
        {/* <MarkerF
          position={{ lat: 40.28653372803985, lng: 142.66233481650784 }}
        /> */}
        <MarkerF
          position={center}
          clickable={true}
          onClick={() => {
            console.log('cliked!');
            /*
            const exhibitionArr = [{}, {},{}]

            import Modal
            const [isModal, setIsModal] = useState(false)
            const [ center, setCenter] = useState('coordinates of Seoul')
            const [ selected, setSelected] = useState(null)
exhibitionArr.map(item => Marker)
            ex
            onClick(){
              setCenter(exhibiption.postion)
              setSelected(exibition)
              setIsModal(true)
            }
            
            
            */
          }}
          title={'Hello'}
        />
      </GoogleMap>
      {/* <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
          <>
            <MarkerF position={center}></MarkerF>
            {<arkerF position={position2}></arkerF> 
          </>
        </GoogleMap>
      </LoadScript>  */}
    </>
  );
}

// 왜? 이렇게 해야하지?
export default React.memo(Map);
