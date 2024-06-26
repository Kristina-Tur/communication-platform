import React from 'react'
import s2 from '../App.module.css'
import avatar from '../../../../assets/images/avatar.png'
import {Message} from "./Message/Message";
import {FriendMessage} from "./FriendMessage/FriendMessage";
import {MessageType} from "../../../../redux/store";
import styled from "styled-components";
import {Avatar, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {DialogListType} from "../Dialogs/Dialogs";

type Props = {
    dialogs: DialogListType[]
    messages: MessageType[]
   /* friendMessage: MessageType*/
}

export const MessageList = ({dialogs, messages}: Props) => {
    return (
        <MessageListWrapper>
            <ListItemWrapper>
                <ListItemAvatar>
                    <Avatar src={dialogs[0].avatar} alt={dialogs[0].name}/>
                </ListItemAvatar>
                <ListItemText primary={dialogs[0].name}/>
            </ListItemWrapper>
            <MessageWrapper>
                <Message messages={messages}/>
               {/* <FriendMessage messages={messages}/>*/}
            </MessageWrapper>
        </MessageListWrapper>
    )
}

const MessageListWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    margin-right: 50px;
    margin-bottom: 50px;
`

const ListItemWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 22px;
    text-align: left;
    margin-top: 15px;
    margin-bottom: 10px;
`
const MessageWrapper = styled.div`
    border-top: 1px solid rgb(217, 217, 217);
    border-bottom: 1px solid rgb(217, 217, 217);
    padding-top: 25px;
    padding-bottom: 30px;
    height: 550px;
    
`
