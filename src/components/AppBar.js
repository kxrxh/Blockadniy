import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {background, buttons, buttonText} from "../constants/constants";
import {useState} from "react";
import {InfoDialog} from "./InfoDialog";

export default function AppHeadBar() {
    const [dialogState, setDialogState] = useState(false);
    const changeState = (state) => {
        setDialogState(state);
    };
    return (
        <div>
            <AppBar position="static" style={{backgroundColor: background}}>
                <Toolbar>
                    <Typography variant="h5">Блок</Typography>
                    <Typography variant="h5" color={buttons}>адный</Typography>
                    <Button
                        onClick={() => changeState(true)}
                        style={{
                            backgroundColor: buttons,
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