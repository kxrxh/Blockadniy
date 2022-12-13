import {GetYandexMapRouteUrl} from "../utils/utils";
import "../styles/map-link.css"
import MapIcon from '@mui/icons-material/Map';
import {Button} from "@mui/material";
import {button, buttonText, hover_button} from "../constants/constants";

function MapLink({latAndLon}) {
    return (
        <a className="map-link" href={GetYandexMapRouteUrl(latAndLon)}
           target="_blank" rel="noreferrer">
            <Button startIcon={<MapIcon/>} variant="outlined" size='small'
                    sx={{
                        fontSize: '12px',
                        marginLeft: '15px',
                        color: buttonText,
                        borderColor: buttonText,
                        borderWidth: '1px',
                        backgroundColor: button,
                        ":hover": {
                            borderColor: buttonText, backgroundColor: hover_button
                        }
                    }}>
                На
                карте
            </Button>
        </a>
    );
}

export default MapLink;