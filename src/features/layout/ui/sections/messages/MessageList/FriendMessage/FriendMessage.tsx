import React from 'react'
import styled from "styled-components";
import {Theme} from "../../../../../../../app/styles/Theme";
import {MessageType} from "../../../../../model/messages-reducer";

type FriendMessagePropsType = {
    friendMessages: MessageType[]
}

export const FriendMessage = ({friendMessages}: FriendMessagePropsType) => {
    return (
        <>
            {friendMessages.map(message => {
                return  <MessageWrapper key={message.id}>
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
            })}
        </>
    )
}

const MessageWrapper = styled.div`
    margin-bottom: 30px;
    transform: scaleX(-1);  /*для зеркального отражения сообщения*/
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
    text-align: left;
    margin-bottom: 3px;
    transform: scaleX(-1);  /*для зеркального отражения сообщения и возврат отображения текста как надо*/
`
const MessageText = styled.p`
    color: black;
    font-size: 16px;
    font-weight: 400;
    font-family: "Montserrat",sans-serif;
    transform: scaleX(-1);  /*для зеркального отражения сообщения и возврат отображения текста как надо*/
`
const TimeWrapper = styled.div`
    color: rgb(0, 0, 0);
    font-size: 10px;
    text-align: left;
    transform: translateX(-10px) scaleX(-1);
`