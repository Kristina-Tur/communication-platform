import React, {ChangeEvent, useRef, useState} from 'react';
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
import {ToolbarSx} from "./PostInput.styles";

type PostInputPropsType = {
    addPost: (value: string) => void
}

export const PostInput = ({addPost}: PostInputPropsType) => {
    const [value, setValue] = useState('')
    const textareaRef = useRef(null)

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.currentTarget.value)
    }

    const onClickHandler = () => {
        addPost(value)
        setValue('')
    }

    return (
        <PostInputWrapper>
            <Toolbar sx={ToolbarSx}>
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
                value={value}
                onChange={onChangeHandler}
                ref={textareaRef}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={onClickHandler}
                sx={{mt: '1rem'}}
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