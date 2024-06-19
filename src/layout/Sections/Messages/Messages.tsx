import * as React from 'react';
import {MessageForm} from "./MessageForm/MessageForm";
import {Dialogs, DialogListType} from "./Dialogs/Dialogs";
import styled from "styled-components";
import {MessageList} from "./MessageList/MessageList";
import {MessageType} from "../../../state/state";
import {Container} from "../../../components/Container";

export type MessagesProps = {
    dialogs: DialogListType[]
    message: MessageType
    friendMessage: MessageType
};

export const Messages = ({dialogs, message, friendMessage}: MessagesProps) => {
    return (
        <StyledSection>
            <Container>
                <Wrapper>
                    <Dialogs dialogs={dialogs}/>
                    <MessageList dialogs={dialogs} message={message} friendMessage={friendMessage}/>
                </Wrapper>
                <MessageForm/>
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