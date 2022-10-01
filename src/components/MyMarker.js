import {Marker, MarkerLayout} from "yandex-map-react";
import {headLine} from "../constants/constants";

export function MyMarker({data}) {
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
        <Marker key={`marker_${data['id']}`} lat={data['pos'][0]} lon={data['pos'][1]}
                onClick={() => console.log("click")}>
            <MarkerLayout>
                <div style={markerStyles}>
                    <img src={data['img']} width="50px" height="40px" alt={"t"}/>
                </div>
            </MarkerLayout>
        </Marker>
    );
}