import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import avatar from '../../../../assets/images/avatar.svg'
import Box from "@mui/material/Box";
import {CardMediaSx, CardSx} from "./CardProfile.styles";

type Props = {

};
export const CardProfile = (props: Props) => {
    return (
        <Card sx={CardSx}>
            <CardMedia
                component="img"
                image={avatar}
                alt="Аватар пользователя"
                sx={CardMediaSx}
            />
            <CardContent sx={{textAlign: 'center'}}>
                <Typography gutterBottom variant="h5">
                    Jo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Position/Profession
                </Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} my={2}>
                    <LocationOnIcon color="primary"/>
                    <Typography variant="body2" color="text.secondary">
                        City, Country
                    </Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <PeopleIcon color="primary"/>
                    <Typography variant="body2" color="text.secondary">
                        1234 Followers
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};