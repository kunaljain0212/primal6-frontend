import React from 'react';
import {GoogleMap, withScriptjs,withGoogleMap} from 'react-google-maps';
import { MapApiKey } from '../keys';
import mapStyles from './mapStyles';

const options = {
    styles:mapStyles
}
function map(){
    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 26.21456, lng: 78.182709 }}
          defaultOptions={{ style:mapStyles }}
          options = {options}
          def
        />
    );
}

const WrappedMap = withScriptjs(withGoogleMap(map));
const RenderMap = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MapApiKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};
export default RenderMap;