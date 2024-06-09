import React, {ChangeEvent, useState} from 'react';
import {TextField, Button, Grid, AppBar, Toolbar, IconButton} from '@mui/material';
import {Typography, Badge} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageIcon from '@mui/icons-material/Image';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from "styled-components";

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
            <AppBar position="static" sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                color: 'text.secondary',
                boxShadow: 'none'
            }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="logo">
                        <TwitterIcon/>
                    </IconButton>
                    <Typography variant="h6" style={{flexGrow: 1}}>
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
            </AppBar>
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