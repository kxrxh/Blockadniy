import {Marker, MarkerLayout} from "yandex-map-react";
import {marker_border, marker_outline} from "../constants/constants";
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
                        outline: `3px solid ${marker_outline}`,
                        border: `2px solid ${marker_border}`,
                        background: `white`,
                        borderRadius: '50px'
                    }}>
                        <img src={data['preview']} width="50px" height="40px" alt={"t"}/>
                    </div>
                </MarkerLayout>
            </Marker>
            <MonumentCard monumentInfo={data} state={isOpen} changeState={changeIsOpen}/>
        </div>
    );
}