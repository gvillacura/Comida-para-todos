import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react'
import './map.css'
import Pin from './pin';

const Map = () => {
    return (
        <Fragment>
            <div className="map-title">
                <h4>¡Encuéntralos</h4>
                <h4>Aquí!</h4>
            </div>
            <div className="map-container">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCZjjtDiV4gKhY2ITn09Xmk-RHRJ-ehC60' }}
                    defaultCenter={{ lng: -70.6482700, lat: -33.4569400 }}
                    defaultZoom={11}
                >
                    <Pin lat={-33.489017} lng={-70.650028} text={"Dulceria Tu Casa"} />
                    <Pin lat={-33.514066} lng={-70.685474} text={"Pan y masas"} />
                    <Pin lat={-33.452313} lng={-70.694851} text={"Dulces y algo más"} />
                    <Pin lat={-33.494053} lng={-70.599520} text={"Paola Cancino"} />
                    <Pin lat={-33.428254} lng={-70.617522} text={"+Saludable"} />
                    <Pin lat={-33.434632} lng={-70.603167} text={"Dil Horno"} />
                    <Pin lat={-33.453155} lng={-70.531866} text={"Dulces Momentos"} />
                    <Pin lat={-33.415459} lng={-70.587894} text={"Delicias Medioriente"} />
                    <Pin lat={-33.536720} lng={-70.663168} text={"Juana Oyarsún"} />
                </GoogleMapReact>
            </div>
        </Fragment>
    );
}

export default Map;