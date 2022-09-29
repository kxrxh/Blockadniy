import {Marker, MarkerLayout} from "yandex-map-react";

export function MyMarker({key, lat, lon}) {
    const markerStyles = {
        width: '40px',
        height: '40px',
        overflow: 'hidden',
        border: '2px solid black',
        background: '#FFF',
        borderRadius: '5px'
    };
    return (
        <Marker key={`marker_${key}`} lat={lat} lon={lon} onClick={() => console.log("click")}>
            <MarkerLayout>
                <div style={markerStyles}>
                </div>
            </MarkerLayout>
        </Marker>
    );
}