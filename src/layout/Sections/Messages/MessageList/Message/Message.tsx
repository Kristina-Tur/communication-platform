import React from 'react'
import {MessageType} from "../../../../../redux/store";
import styled from "styled-components";
import {Theme} from "../../../../../styles/Theme";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    messages: MessageType[]
}

// нужно отобразить приходящие данные
export const Message = ({messages}: MessagePropsType) => {
    return (
        <>
        {messages.map(message => {
            return  (
                <MessageWrapper key={message.id}>
                <ImgWrapper>
                    <img
                        src={message.user.avatar}
                        alt={'avatar'}
                    />
                    <TextWrapper>
                        <NameWrapper>
                            {message.user.name}
                        </NameWrapper>
                        <MessageText>
                            {message.messageText.text}
                        </MessageText>
                    </TextWrapper>
                </ImgWrapper>
                <TimeWrapper>
                    {message.messageText.time}
                </TimeWrapper>
            </MessageWrapper>
            )})}
        </>
    )
}

const MessageWrapper = styled.div`
    margin-bottom: 30px;
`
const ImgWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
    margin-bottom: 5px;
    
    & img{
        width: 48px;
        height: 48px;
        align-self: end;
}
`

const TextWrapper = styled.div`
    box-shadow: 0 1px 2px 0 rgba(29, 33, 38, 0.1),0 5px 20px 0 rgba(29, 33, 38, 0.03);
    background-color: ${Theme.colors.secondaryBg};
    clip-path: polygon(0% 0%, 96% 0, 96% 82%, 99% 100%, 0% 100%);
    border-radius: 10px;
    padding: 8px 35px 8px 13px;
    max-width: 527px;
`

const NameWrapper = styled.div`
    color: black;
    font-size: 18px;
    text-align: right;
    margin-bottom: 3px;
`
const MessageText = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 400;
    font-family: "Montserrat",sans-serif;
`
const TimeWrapper = styled.div`
    color: rgb(0, 0, 0);
    font-size: 10px;
    text-align: right;
    transform: translateX(-10px);
`