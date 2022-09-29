import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {background, buttons, buttonText} from "../constants/constants";

export default function AppHeadBar() {
    return (
        <AppBar position="static" style={{backgroundColor: background}}>
            <Toolbar>
                <Typography variant="h5">Дневник</Typography>
                <Typography variant="h5" color={buttons}>Град</Typography>
                <Button style={{
                    backgroundColor: buttons,
                    display: 'flex',
                    marginLeft: 'auto',
                    color: buttonText
                }}>FAQ</Button>
            </Toolbar>
        </AppBar>
    );
}