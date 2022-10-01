import {Map} from "yandex-map-react";
import getAllPoints from "../database/supabase";
import {useEffect, useState} from "react";
import {MyMarker} from "./MyMarker";

export function YanMap({center, zoom}) {
    const [data, setData] = useState([])
    useEffect(() => {
        const get = async function (callback) {
            setData(await getAllPoints())
        }
        get().catch((err) => console.error(err));
    }, [])

    return (
        <Map onAPIAvailable={() => {
        }}
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