import * as React from 'react';
import {MessageForm} from "./MessageForm/MessageForm";
import {Dialogs, DialogListType} from "./Dialogs/Dialogs";
import styled from "styled-components";
import {MessageList} from "./MessageList/MessageList";
import {ActionType, MessageType} from "../../../redux/store";
import {Container} from "../../../components/Container";

export type MessagesProps = {
    dialogs: DialogListType[]
    messages: MessageType[]
    /*friendMessage: MessageType*/
    messageText: string
    dispatch: (action: ActionType) => void
};

export const Messages = ({dialogs, messages, messageText, dispatch}: MessagesProps) => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <Dialogs dialogs={dialogs}/>
                    <MessageList dialogs={dialogs} messages={messages} /*friendMessage={friendMessage}*//>
                </Wrapper>
                <MessageForm messageText={messageText} dispatch={dispatch}/>
            </Container>
        </StyledSection>
    );
};

const StyledSection = styled.div`
    flex-grow: 1;
    
    height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`