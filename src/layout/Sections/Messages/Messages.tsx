import * as React from 'react';
import {MessageForm} from "./MessageForm/MessageForm";
import {Dialogs, DialogListType} from "./Dialogs/Dialogs";
import styled from "styled-components";
import {MessageList} from "./MessageList/MessageList";
import {ActionType, MessageType, StoreType} from "../../../redux/store";
import {Container} from "../../../components/Container";
import {MessageFormContainer} from "./MessageForm/MessageFormContainer";
import {AppRootStateType} from "../../../redux/store-redux";

export type MessagesProps = {
   store: AppRootStateType
};

export const Messages = ({store}: MessagesProps) => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <Dialogs dialogs={store.messagesPage.dialogs}/>
                    <MessageList dialogs={store.messagesPage.dialogs} messages={store.messagesPage.messages} /*friendMessage={friendMessage}*//>
                </Wrapper>
                <MessageFormContainer store={store}/>
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