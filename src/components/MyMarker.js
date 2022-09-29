import {Marker, MarkerLayout} from "yandex-map-react";
import {headLine, highlight} from "../constants/constants";

export function MyMarker({key, lat, lon}) {
    const markerStyles = {
        width: '40px',
        height: '40px',
        overflow: 'hidden',
        border: '3px solid',
        borderColor: highlight,
        background: headLine,
        borderRadius: '10px'
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