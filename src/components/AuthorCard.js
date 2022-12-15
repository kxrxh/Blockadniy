import {Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import "../styles/boldtext.css"
import "../styles/description.css"
import '@splidejs/react-splide/css';
import CloseIcon from "@mui/icons-material/Close";
import {marker_outline} from "../constants/constants";

export default function AuthorCard({authorInfo, state, changeState}) {
    console.log(authorInfo)
    return (<Dialog
        open={state}
        onClose={() => changeState(false)}
        fullWidth={true}
        maxWidth="sm"
        sx={{backgroundColor: 'transparent', maxWidth: '100%',}}>
        <Box sx={{overflowX: 'hidden'}}>
            <Box sx={{display: 'flex'}}>
                <DialogTitle sx={{maxWidth: '70%'}}>{<text
                    className="bold-text">{authorInfo['fullname']}</text>}</DialogTitle>
                <IconButton
                    sx={{marginLeft: 'auto', marginRight: '5px'}}
                    size="large"
                    onClick={() => changeState(false)}
                    variant="contained"><CloseIcon/>
                </IconButton>
            </Box>
            <DialogContent sx={{display: 'flow', maxWidth: '100%',}}>
                <img style={{
                    width: '200px', outline: `5px solid ${marker_outline}`, border: `5px solid white`,
                }} src={authorInfo['image']} alt="no image"/>
                <DialogContentText sx={{marginTop: '20px'}}>
                    Годы жизни: {authorInfo['years']}
                </DialogContentText>
                <DialogContentText sx={{marginTop: '20px'}}>
                    Пол: {authorInfo['sex']}
                </DialogContentText>
                <DialogContentText sx={{marginTop: '20px'}}>
                    <p>{authorInfo['bio']}</p>
                </DialogContentText>
            </DialogContent>
        </Box>
    </Dialog>);
}