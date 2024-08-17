import styled from "styled-components";
import {Container} from "../../../../../common/components/Container";
import {MessageFormContainer} from "./MessageForm/MessageFormContainer";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {MessageListContainer} from "./MessageList/MessageListContainer";
import {Redirect} from "react-router-dom";

type MessagesProps = {
    isAuth: boolean
}

export const Messages = ({isAuth}: MessagesProps) => {

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
    min-height: calc(100vh - 60px);
    background-color: #c8e0ff33;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`