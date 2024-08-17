import React from 'react'
import {Message} from "./Message/Message";
import styled from "styled-components";
import {Avatar, ListItemAvatar} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import {DialogListType} from "../Dialogs/Dialogs";
import {MessageType} from "../../../../model/messages-reducer";
import {FriendMessage} from "./FriendMessage/FriendMessage";

type Props = {
    dialogs: DialogListType[]
    messages: MessageType[]
    friendMessages: MessageType[]
}

export const MessageList = ({dialogs, messages, friendMessages}: Props) => {
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
                <FriendMessage friendMessages={friendMessages}/>
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
    padding: 30px;
    height: 550px;
    overflow: auto;
    
`
