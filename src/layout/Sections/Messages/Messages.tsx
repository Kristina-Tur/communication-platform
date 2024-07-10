import * as React from 'react';
import {MessageForm} from "./MessageForm/MessageForm";
import {Dialogs, DialogListType} from "./Dialogs/Dialogs";
import styled from "styled-components";
import {MessageList} from "./MessageList/MessageList";
import {ActionType, MessageType, StoreType} from "../../../redux/store";
import {Container} from "../../../components/Container";
import {MessageFormContainer} from "./MessageForm/MessageFormContainer";
import {AppRootStateType} from "../../../redux/store-redux";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {MessageListContainer} from "./MessageList/MessageListContainer";

/*export type MessagesProps = {
   store: AppRootStateType
};*/

export const Messages = () => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <DialogsContainer/>
                    <MessageListContainer /*friendMessage={friendMessage}*//>
                </Wrapper>
                <MessageFormContainer/>
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