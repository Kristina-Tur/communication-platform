import avatar from "../assets/images/avatar.png";

type UserType = {
    avatar: string
    name: string
}
type MessageTextType = {
    text: string
    time: string
}
export type MessageType = {
    id: number
    user: UserType
    messageText: MessageTextType
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessageType[]
    messageText: string
}

type UpdateMessageTextActionType = ReturnType<typeof updateMessageTextAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type MessagesReducerActionType =
    UpdateMessageTextActionType |
    SendMessageActionType

const initialState = {
    dialogs: [
        {id: 1, name: 'Max', avatar: 'https://via.placeholder.com/150/92c952'},
        {id: 2, name: 'John', avatar: 'https://via.placeholder.com/150/771796'},
        {id: 3, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
        {id: 4, name: 'Jane', avatar: 'https://via.placeholder.com/150/771796'},
        {id: 5, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
        {id: 6, name: 'Alex', avatar: 'https://via.placeholder.com/150/92c952'},
    ],
    messages: [
        /*message: */{
            id: 0,
            user: {
                avatar: avatar,
                name: 'Some Name',
            },
            messageText: {
                text: 'some textsome textsome textsome textsome textsome textsome text',
                time: '22:00'
            }
        }
    ],
    /*friendMessage: {
        id: 100,
        user:
            {
                avatar: avatar,
                name: 'Friend Name',
            },
        messageText: {
            text: 'зеркальное сообщение',
            time: '22:00',
        },
    },
},
*/
    messageText: ''
}

export const messagesReducer = (state: MessagesPageType = initialState, action: MessagesReducerActionType) => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            const newMessage = {
                id: 1,
                user: {
                    avatar: avatar,
                    name: 'Some Name'
                },
                messageText: {
                    text: state.messageText,
                    time: '22:00'
                }
            }
            return {...state, messageText: '', messages: [...state.messages, newMessage]}
        }
        case 'UPDATE-MESSAGE-TEXT': {
            return {...state, messageText: action.value}
        }
        default :
            return state
    }
}

export const sendMessageAC = () => {
    return {type: 'SEND-MESSAGE'} as const
}
export const updateMessageTextAC = (value: string) => {
    return {type: 'UPDATE-MESSAGE-TEXT', value} as const
}