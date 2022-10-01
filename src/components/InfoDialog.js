import "../styles/hlink.css"
import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Typography
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {highlight} from "../constants/constants";

function InfoDialog({state, setState}) {
    return (
        <Dialog
            open={state}
            onClose={() => setState(false)}
            fullWidth={true}
            maxWidth="lg"
            sx={{backgroundColor: 'transparent'}}>
            <Box sx={{display: 'flex'}}>
                <DialogTitle>О сайте</DialogTitle>
                <IconButton
                    sx={{marginLeft: 'auto', marginRight: '5px', color: highlight}}
                    size="large"
                    edge='end'
                    onClick={() => setState(false)}
                    variant="contained"><CloseIcon/>
                </IconButton>
            </Box>
            <DialogContent sx={{display: 'flow'}}>
                <DialogContentText>
                    Данный сайт был разработан для ознакомлением с достопримечательностями Санкт-Петербурга,
                    которые связаны с блокадой Ленинграда.
                </DialogContentText>
                <DialogContentText>
                    (8 сент. 1941 г. – 27 янв. 1944 г.).
                </DialogContentText>
                <DialogContentText sx={{marginTop: '50px'}}>
                    This site was created to get acquainted with the sights of St. Petersburg, which are associated
                    with
                    the blockade of Leningrad.
                </DialogContentText>
                <DialogContentText>
                    (September 8, 1941 – January 27, 1944).
                </DialogContentText>
                <Typography sx={{marginTop: '150px', marginBottom: '15px'}}>
                    Автор: Пархоменко Кирилл
                </Typography>
                <Typography sx={{width: '40%', marginBottom: '15px'}}>
                    Национальный исследовательский университет ИТМО, ПИиКТ, P3112,
                    367468
                </Typography>
                <div className='hlink'>
                    <a href="https://github.com/KXRXH" target="_blank">Мой Github</a> | <a
                    href="https://github.com/KXRXH/Blockadniy" target="_blank">Исходный код</a>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default InfoDialog;