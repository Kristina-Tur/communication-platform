import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from "styled-components";
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export const PostInput = () => {
    const [postContent, setPostContent] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPostContent(event.currentTarget.value);
    };

    const handleSubmit = () => {
        // Здесь можно отправить содержимое поста, например, на сервер или в стейт-менеджер
        console.log(postContent);
    };

    return (
        <PostInputWrapper>
            <Toolbar sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                color: 'text.secondary',
            }}>
                <TwitterIcon sx={{mr: '15px'}}/>
                <Typography variant="h6" sx={{flexGrow: 1}}>
                    My posts
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="primary">
                        <TwitterIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={2} color="primary">
                        <ImageIcon/>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={5} color="primary">
                        <FavoriteBorderIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
            <TextField
                id="outlined-multiline-static"
                label="New post"
                multiline
                rows={4}
                placeholder="Enter the text of your post here..."
                variant="outlined"
                fullWidth
                value={postContent}
                onChange={handleInputChange}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                style={{marginTop: '1rem'}}
            >
                Publish
            </Button>
        </PostInputWrapper>
    );
};

const PostInputWrapper = styled.div`
    max-width: 750px;
    width: 100%;
`