// @flow
import * as React from 'react';
import {MessageForm} from "./MessageForm";
import {DialogList, DialogListType} from "./DialogList";
import styled from "styled-components";
import {MessageList, MessageType} from "./MessageList";

export type DialogsProps = {
    dialogs: DialogListType[]
    message: MessageType
    friendMessage: MessageType
};

export const Dialogs = ({dialogs, message, friendMessage}: DialogsProps) => {
    return (
        <div style={{marginLeft: '250px'}}>
            <Wrapper>
                <DialogList dialogs={dialogs}/>
                <MessageList message={message} friendMessage={friendMessage}/>
            </Wrapper>

            <MessageForm/>
        </div>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`