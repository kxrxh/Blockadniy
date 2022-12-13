import {Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageSlides from "./ImageSlides";
import "../styles/boldtext.css"
import "../styles/description.css"
import '@splidejs/react-splide/css';
import MapLink from "./MapLink";


export default function MonumentCard({monumentInfo, state, changeState}) {
    return (
        <Dialog
            open={state}
            onClose={() => changeState(false)}
            fullWidth={true}
            maxWidth="lg"
            sx={{backgroundColor: 'transparent', maxWidth: '100%',}}>
            <Box sx={{overflowX: 'hidden'}}>
                <Box sx={{display: 'flex'}}>
                    <DialogTitle sx={{maxWidth: '70%'}}>{<text
                        className="bold-text">{monumentInfo['title']}</text>}</DialogTitle>
                    <IconButton
                        sx={{marginLeft: 'auto', marginRight: '5px'}}
                        size="large"
                        onClick={() => changeState(false)}
                        variant="contained"><CloseIcon/>
                    </IconButton>
                </Box>
                <DialogContent sx={{display: 'flow', maxWidth: '100%'}}>
                    <ImageSlides data={monumentInfo}/>
                    <DialogContentText sx={{marginTop: '20px'}}>
                        Адрес: {monumentInfo['address']}
                        <MapLink latAndLon={monumentInfo['pos']}/>
                    </DialogContentText>
                    <DialogContentText sx={{marginTop: '80px'}}>
                        <div className="description" dangerouslySetInnerHTML={{__html: monumentInfo['info']}}/>
                    </DialogContentText>
                </DialogContent>
            </Box>
        </Dialog>
    );
}