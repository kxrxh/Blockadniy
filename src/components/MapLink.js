import {GetYandexMapRouteUrl} from "../utils/utils";
import "../styles/map-link.css"
import MapIcon from '@mui/icons-material/Map';
import {Button} from "@mui/material";
import {buttons, buttonsHover, buttonText} from "../constants/constants";

function MapLink({latAndLon}) {
    return (
        <a className="map-link" href={GetYandexMapRouteUrl(latAndLon)}
           target="_blank">
            <Button startIcon={<MapIcon/>} variant="outlined" size='small'
                    sx={{
                        fontSize:'12px',
                        marginLeft: '15px',
                        color: buttonText,
                        borderColor: buttonText,
                        borderWidth: '1px',
                        backgroundColor: buttons,
                        ":hover": {
                            borderColor: buttonText, backgroundColor: buttonsHover
                        }
                    }}>
                На
                карте
            </Button>
        </a>
    );
}

export default MapLink;