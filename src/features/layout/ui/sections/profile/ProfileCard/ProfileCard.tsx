import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import avatar from '../../../../../../assets/images/avatar.svg'
import Box from "@mui/material/Box";
import {CardMediaSx, CardSx} from "./ProfileCard.styles";
import {ProfileType} from "../../../../model/profile-reducer";
import {Loader} from "../../../../../../common/components/loader/Loader";

type Props = {
    profile: null | ProfileType
};
export const ProfileCard = ({profile}: Props) => {
    if (!profile) {
        return <Loader/>
    }

    if (!profile.photos?.small || !profile.photos?.large) {
       // profile.photos = {small: avatar, large: avatar}
        profile = {...profile, photos: {small: avatar, large: avatar}}
    }


    console.log('Profile Data:', profile);
    return (
        <Card sx={CardSx}>
            <CardMedia
                component="img"
                image={profile.photos.large}
                alt="Аватар пользователя"
                sx={CardMediaSx}
            />
            <CardContent sx={{textAlign: 'center'}}>
                <Typography gutterBottom variant="h5">
                    {profile.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Position/Profession
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {profile.aboutMe}
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