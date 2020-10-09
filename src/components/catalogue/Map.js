import React from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import Pin from './pin';

const Map = () => {
    return (
        <div className="map-container">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCZjjtDiV4gKhY2ITn09Xmk-RHRJ-ehC60' }}
                defaultCenter={{ lng: -70.6482700, lat: -33.4569400 }}
                defaultZoom={11}
            >
                {/* <Pin lat={-33.517279} lng={-70.700138} text={"+Saludable"}/>
                <Pin lat={-33.427293} lng={-70.613934} text={"Masas y panes"} /> */}
            </GoogleMapReact>


        </div>
    );
}

export default Map;