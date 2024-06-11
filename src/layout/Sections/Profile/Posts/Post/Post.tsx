import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

type PostPropsType = {
    postText: string
}

export const Post = ({postText}: PostPropsType) => {
    const [likes, setLikes] = useState(0);

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    return (
        <Card sx={{mb: '50px'}}>
            <CardHeader
                avatar={
                    <Avatar>J</Avatar>
                }
                title="Jo Smith"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {postText}
                </Typography>
            </CardContent>
            <IconButton onClick={handleLikeClick}>
                <ThumbUpAltIcon />
                {likes > 0 && <Typography variant="body2">{likes}</Typography>}
            </IconButton>
        </Card>
    );
}

