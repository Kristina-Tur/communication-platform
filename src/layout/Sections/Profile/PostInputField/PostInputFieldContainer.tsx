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
import {ToolbarSx} from "./PostInputField.styles";
import {Theme} from "../../../../styles/Theme";
import {ActionType, StoreType} from "../../../../redux/store";
import {addPostAC, updatePostTextAC} from "../../../../redux/profile-reducer";
import {PostInputField} from "./PostInputField";
import {AppRootStateType, RootState} from "../../../../redux/store-redux";
import {connect, useDispatch, useSelector} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import {sendMessageAC, updateMessageTextAC} from "../../../../redux/messages-reducer";
import {MessageForm} from "../../Messages/MessageForm/MessageForm";

/*type PostInputContainerPropsType = {
    store: AppRootStateType
}*/

/*export const PostInputFieldContainer = ({store}: PostInputContainerPropsType) => {
    const dispatch = useDispatch();

    const updatePostText = (value: string) => {
            dispatch(updatePostTextAC(value))
    }

    const addPost = () => {
            dispatch(addPostAC())
    }

    return <PostInputField
        updatePostText={updatePostText}
        addPost={addPost}
        postText={store.profilePage.postText}/>;
};*/

const mapStateToProps = (state: RootState) => {
    return {
        postText: state.profilePage.postText
    }
}
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        updatePostText: (value: string) => {
            dispatch(updatePostTextAC(value))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const PostInputFieldContainer = connect(mapStateToProps, mapDispatchToProps)(PostInputField)