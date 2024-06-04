import React from 'react';
import {Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';
import avatar from '../../../images/avatar.svg'
import Box from "@mui/material/Box";
import {Posts} from "../Posts/Posts";
import {PostInput} from "../Posts/PostInput";
import bg from "../../../images/bg.png";

const Profile = () => {
    return (
        <Grid container spacing={2}  sx={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            justifyContent: 'center',
            backgroundColor: '#c8e0ff33',
        }}
        >
            <Grid item xs={3} sx={{marginTop: '125px', marginRight: '50px'}}>
                <Card sx={{maxWidth: '445px', m: 2}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={avatar} // Укажите здесь путь к изображению аватара
                        alt="Аватар пользователя"
                        sx={{objectFit: 'contain'}}
                    />
                    <CardContent sx={{textAlign: 'center'}}>
                        <Typography gutterBottom variant="h5" component="div">
                            Jo
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Position/Profession
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" my={2}>
                            <LocationOnIcon color="primary"/>
                            <Typography variant="body1" color="text.secondary" sx={{ml: 0.5, fontSize: '0.875rem'}}>
                                City, Country
                            </Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <PeopleIcon color="primary"/>
                            <Typography variant="body1" color="text.secondary" sx={{ml: 0.5, fontSize: '0.875rem'}}>
                                1234 Followers
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>

            </Grid>
            <Grid xs={6}>
                <PostInput/>
                <Posts/>
                <Posts/>
            </Grid>
        </Grid>
    );
};

export default Profile;