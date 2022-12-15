import {Map} from "yandex-map-react";
import {useEffect, useState} from "react";
import MyMarker from "./MyMarker";
import {GetAllPoints} from "../database/supabase";

function YanMap({center, zoom}) {
    const [data, setData] = useState([])
    useEffect(() => {
        // Calling GetAllPoints asynchronously
        const Call = async () => {
            setData(await GetAllPoints())
        }
        Call().catch((err) => console.error(err));
    }, [])

    return (
        <Map
            style={{width: "100%", height: "100%"}}
            state={{controls: ['zoomControl', 'rulerControl', 'typeSelector']}}
            center={center}
            zoom={zoom}>
            {data.map((i) => (
                <MyMarker key={i['id']} data={i}/>
            ))}
        </Map>
    );
}

export default YanMap;