import "../styles/hlink.css"
import {Box, Dialog, DialogContent, DialogTitle, IconButton, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import "../styles/boldtext.css"
import "../styles/image_card.css"
import {highlight, ITMO_LOGO} from "../constants/constants";

function InfoDialog({state, setState}) {
    return (<Dialog
        open={state}
        onClose={() => setState(false)}
        fullWidth={true}
        maxWidth="lg"
        sx={{backgroundColor: 'transparent'}}>
        <Box sx={{display: 'flex'}}>
            <DialogTitle className="bold-text">О сайте</DialogTitle>
            <IconButton
                sx={{marginLeft: 'auto', marginRight: '5px', color: highlight}}
                size="large"
                edge='end'
                onClick={() => setState(false)}
                variant="contained"><CloseIcon/>
            </IconButton>
        </Box>
        <DialogContent sx={{display: 'flow'}}>
            <Typography>
                Данный сайт был разработан для ознакомления с различными местами города Санкт-Петербурга, которые
                связаны с блокадой ленинграда.
            </Typography>
            <Typography className="bold-text">(8 сент. 1941 г. – 27 янв. 1944 г.).</Typography>
            <Typography sx={{marginTop: '30px'}}>
                На карте представлены месте, упоминание которых встречается в записях жителей города.
            </Typography>

            <Typography sx={{marginTop: '30px'}} className='hlink'>
                Записи из дневников, воспоминания, изображения авторов записей были взяты с сайта <a
                href="https://prozhito.org/" target="_blank" rel="noreferrer">Прожито</a>.
            </Typography>
            <div className="image">
                <img src={ITMO_LOGO} alt={"itmo_logo"}/>
            </div>
            <Typography sx={{marginTop: '60px', marginBottom: '15px'}}>
                Автор: Пархоменко Кирилл Александрович
            </Typography>
            <Typography sx={{marginBottom: '15px'}}>
                Национальный исследовательский университет ИТМО, ПИиКТ
            </Typography>
            <Typography className='hlink'>
                <a href="https://github.com/KXRXH" target="_blank" rel="noreferrer">Github автора</a> | <a
                href="https://github.com/KXRXH/Blockadniy" target="_blank" rel="noreferrer">Исходный код</a>
            </Typography>
        </DialogContent>
    </Dialog>);
}

export default InfoDialog;