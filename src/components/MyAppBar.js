import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {background, button, buttonText, text_highlight} from "../constants/constants";
import {useState} from "react";
import InfoDialog from "./InfoDialog";

function MyAppBar() {
    const [dialogState, setDialogState] = useState(false);
    const changeState = (state) => {
        setDialogState(state);
    };
    return (
        <div>
            <AppBar position="static" style={{backgroundColor: background}}>
                <Toolbar>
                    <Typography variant="h5">Блок</Typography>
                    <Typography variant="h5" color={text_highlight}>адный</Typography>
                    <img src={"./len_logo.ico"} alt={"logo_leningrad"} style={{
                        height: '50px',
                        marginLeft: '10px'
                    }}/>
                    <Button
                        onClick={() => changeState(true)}
                        style={{
                            backgroundColor: button,
                            display: 'flex',
                            marginLeft: 'auto',
                            color: buttonText
                        }}>О сайте</Button>
                </Toolbar>
            </AppBar>
            <InfoDialog state={dialogState} setState={setDialogState}/>
        </div>
    );
}

export default MyAppBar;