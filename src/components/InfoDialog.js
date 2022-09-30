import {
    Box,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Typography
} from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {highlight} from "../constants/constants";

export function InfoDialog({state, setState}) {
    return (
        <Dialog
            open={state}
            onClose={() => setState(false)}
            fullWidth={true}
            maxWidth="lg"
            sx={{backgroundColor: 'transparent'}}
        >
            <Box sx={{display: 'flex'}}>
                <DialogTitle>О сайте</DialogTitle>
                <IconButton
                    sx={{marginLeft: 'auto'}}
                    color="error"
                    size="small"
                    onClick={() => setState(false)}
                    variant="contained"><ExitToAppIcon/></IconButton>
            </Box>
            <DialogContent>
                <DialogContentText sx={{display: 'flex'}}>
                    <Typography>Данный сайт был разработан для ознакомлением с достопримечательностями Санкт-Петербурга,
                        которые связаны с блокадой Ленинграда (8 сент. 1941 г. – 27 янв. 1944 г.).</Typography>
                    <Box sx={{marginTop: '150px', marginLeft: 'auto', color: highlight}}>
                        <Typography>Автор: Пархоменко Кирилл</Typography>
                        <Typography sx={{marginTop: "10px"}}>НИУ "ИТМО", ПИиКТ, 367468, P3112</Typography>
                    </Box>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
}