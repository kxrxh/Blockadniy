import {Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ImageSlides from "./ImageSlides";
import "../styles/boldtext.css"
import "../styles/description.css"
import '@splidejs/react-splide/css';
import MapLink from "./MapLink";
import {useEffect, useState} from "react";
import {GetAuthor} from "../database/supabase";
import {button, buttonText, hover_button} from "../constants/constants";
import AuthorCard from "./AuthorCard";
import PersonIcon from '@mui/icons-material/Person';


export default function MonumentCard({monumentInfo, state, changeState}) {
    const [isOpen, changeIsOpen] = useState(false);
    const [data, setData] = useState([])
    useEffect(() => {
        const Call = async () => {
            setData(await GetAuthor(monumentInfo['author_id']))
        }
        Call().catch((err) => console.error(err));
    }, [monumentInfo])
    return (<Dialog
        open={state}
        onClose={() => changeState(false)}
        fullWidth={true}
        maxWidth="lg"
        sx={{backgroundColor: 'transparent', maxWidth: '100%'}}>
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
                <Button
                    endIcon={<PersonIcon/>}
                    onClick={() => changeIsOpen(true)}
                    sx={{
                        marginTop: '20px', fontSize: '12px', backgroundColor: button, color: buttonText, ":hover": {
                            borderColor: buttonText, backgroundColor: hover_button
                        }
                    }}>Об авторе</Button>
                <DialogContentText sx={{marginTop: '20px'}}>
                    <div className="description" dangerouslySetInnerHTML={{__html: monumentInfo['info']}}/>
                </DialogContentText>
            </DialogContent>
        </Box>
        <AuthorCard authorInfo={data[0]} state={isOpen} changeState={changeIsOpen}/>
    </Dialog>);
}