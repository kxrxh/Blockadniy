import {Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import {highlight} from "../constants/constants";
import CloseIcon from "@mui/icons-material/Close";

export default function MonumentCard({monumentInfo, state, changeState}) {
    return (
        <Dialog
            open={state}
            onClose={() => changeState(false)}
            fullWidth={true}
            maxWidth="lg"
            sx={{backgroundColor: 'transparent'}}>
            <Box sx={{display: 'flex'}}>
                <DialogTitle>{monumentInfo['title']}</DialogTitle>
                <IconButton
                    sx={{marginLeft: 'auto', marginRight: '5px', color: highlight}}
                    size="large"
                    edge='end'
                    onClick={() => changeState(false)}
                    variant="contained"><CloseIcon/>
                </IconButton>
            </Box>
            <DialogContent sx={{display: 'flow',}}>
                <img src={monumentInfo['img']} alt={'img'} style={{width: '60%', height: '40%', textAlign: 'center'}}/>
                <DialogContentText sx={{marginTop: '100px'}}>
                    {monumentInfo['info']}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}