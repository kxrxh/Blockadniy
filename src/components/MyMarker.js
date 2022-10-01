import {Marker, MarkerLayout} from "yandex-map-react";
import {headLine} from "../constants/constants";
import {useState} from "react";
import MonumentCard from "./MonumentCard";

export default function MyMarker({data}) {
    const [isOpen, changeIsOpen] = useState(false);
    return (
        <div>
            <Marker key={`marker_${data['id']}`} lat={data['pos'][0]} lon={data['pos'][1]}
                    onClick={() => changeIsOpen(true)}>
                <MarkerLayout>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        overflow: 'hidden',
                        border: '3px solid',
                        borderColor: "#271c19",
                        background: headLine,
                        borderRadius: '10px'
                    }}>
                        <img src={data['img']} width="50px" height="40px" alt={"t"}/>
                    </div>
                </MarkerLayout>
            </Marker>
            <MonumentCard monumentInfo={data} state={isOpen} changeState={changeIsOpen}/>
        </div>
    );
}