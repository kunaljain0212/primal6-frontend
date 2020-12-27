import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
import { MapApiKey } from '../keys';
import mapStyles from './mapStyles';
import Navbar from '../components/navbar/Navbar';

const options = {
  styles: mapStyles,
};
function map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 26.21456, lng: 78.182709 }}
      defaultOptions={{ style: mapStyles }}
      options={options}
      def
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(map));
const RenderMap = () => {
  const [isNav, setIsNav] = useState(false);

  const toggleNav = () => {
    setIsNav(!isNav);
  };
  console.log(isNav);
  return (
    <>
      <Navbar isNav={isNav} />
      {isNav ? (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            zIndex: 0,
          }}
        >
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
          <button
            style={{
              position: 'fixed',
              zIndex: '10',
              top: '10rem',
              left: '28rem',
            }}
            onClick={toggleNav}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              height="30px"
              width="30px"
              viewBox="0 0 384 384"
              style={{ enableBackground: 'new 0 0 384 384' }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <rect x="0" y="277.333" width="384" height="42.667" />
                    <rect x="0" y="170.667" width="384" height="42.667" />
                    <rect x="0" y="64" width="384" height="42.667" />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      ) : (
        <div
          style={{
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: 0,
            zIndex: '0',
          }}
        >
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
          <button
            style={{
              position: 'fixed',
              zIndex: '10',
              top: '10rem',
              left: '1rem',
            }}
            onClick={toggleNav}
          >
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              height="30px"
              width="30px"
              viewBox="0 0 384 384"
              style={{
                enableBackground: 'new 0 0 384 384',
                backgroundColor: 'white',
              }}
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <g>
                    <rect x="0" y="277.333" width="384" height="42.667" />
                    <rect x="0" y="170.667" width="384" height="42.667" />
                    <rect x="0" y="64" width="384" height="42.667" />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};
export default RenderMap;
