import "../styles/hlink.css"
import {Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Typography} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import {highlight} from "../constants/constants";

function InfoDialog({state, setState}) {
    return (<Dialog
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
                Данный сайт был разработан для ознакомления с различными местами города Санкт-Петербурга, которые
                связаны с блокадой ленинграда.
            </DialogContentText>
            <DialogContentText>
                (8 сент. 1941 г. – 27 янв. 1944 г.).
            </DialogContentText>
            <DialogContentText>
                На карте представлены месте, упоминание которых встречается в записях жителей города.
            </DialogContentText>
            <DialogContentText sx={{marginTop: '50px'}}>
                This site was created in order to acquaint you with various places in the city of St. Petersburg,
                which are associated with the blockade of Leningrad.
            </DialogContentText>
            <DialogContentText>
                (September 8, 1941 – January 27, 1944).
            </DialogContentText>
            <DialogContentText>
                The map shows the places mentioned in the records of the inhabitants of the city.
            </DialogContentText>
            <Typography sx={{marginTop: '150px', marginBottom: '15px'}}>
                Автор: Пархоменко Кирилл
            </Typography>
            <Typography sx={{width: '40%', marginBottom: '15px'}}>
                Национальный исследовательский университет ИТМО, ПИиКТ, P3112,
                367468
            </Typography>
            <Typography className='hlink'>
                <a href="https://github.com/KXRXH" target="_blank" rel="noreferrer">Мой Github</a> | <a
                href="https://github.com/KXRXH/Blockadniy" target="_blank" rel="noreferrer">Исходный код</a> | <a
                href="https://docs.google.com/spreadsheets/d/1e_AYi7VWuuY7DVqejHwUu4cYFHxz1AZqbn6YSXxVv4w/edit?usp=sharing"
                target="_blank" rel="noreferrer">Источники</a>
            </Typography>
        </DialogContent>
    </Dialog>);
}

export default InfoDialog;