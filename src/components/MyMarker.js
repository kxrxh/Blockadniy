import {Marker, MarkerLayout} from "yandex-map-react";
import {headLine, pointsImg} from "../constants/constants";

export function MyMarker({lat, lon, id}) {
    const markerStyles = {
        width: '40px',
        height: '40px',
        overflow: 'hidden',
        border: '3px solid',
        borderColor: "#271c19",
        background: headLine,
        borderRadius: '10px',
    };
    return (
        <Marker key={`marker_${id}`} lat={lat} lon={lon} onClick={() => console.log("click")}>
            <MarkerLayout>
                <div style={markerStyles}>
                    <img src={pointsImg[id]} width="50px" height="40px" alt={"t"}/>
                </div>
            </MarkerLayout>
        </Marker>
    );
}