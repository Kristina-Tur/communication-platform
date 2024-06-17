import React from 'react'
import s2 from './App.module.css'
import avatar from '../../../assets/images/avatar.png'
import Message from "./Message";
import FriendMessage from "./FriendMessage";
import {MessageType} from "../../../state/state";

type Props = {
    message: MessageType
    friendMessage: MessageType
}

export const MessageList = ({message, friendMessage}: Props) => {
    return (
        <div id={'hw1'} className={s2.container}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message} />
                    <FriendMessage message={friendMessage} />
                </div>
            </div>
        </div>
    )
}

