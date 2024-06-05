// @flow
import * as React from 'react';
import {MessageForm} from "./MessageForm";
import {DialogList} from "./DialogList";
import {MessageList} from "./MessageList";
import styled from "styled-components";
import {MessageListD} from "./MessageListD";

type Props = {};
export const Dialogs = (props: Props) => {
    return (
        <div style={{marginLeft: '250px'}}>
            <Wrapper>
                <DialogList/>
                <MessageListD/>
            </Wrapper>

            <MessageForm/>
        </div>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
`