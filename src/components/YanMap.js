import {points} from "../constants/constants";
import {Map} from "yandex-map-react";
import {MyMarker} from "./MyMarker";

export function YanMap({center, zoom}) {

    return (
        <Map onAPIAvailable={() => {
        }}
             style={{width: "100%", height: "100%"}}
             state={{controls: ['zoomControl', 'rulerControl', 'typeSelector']}}
             center={center}
             zoom={zoom}>
            {points.map(([lat, lon], i) => (
                <MyMarker lat={lat} lon={lon} id={i}/>
            ))}
        </Map>
    );
}