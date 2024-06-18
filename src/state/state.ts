import avatar from "../assets/images/avatar.png";
import {v1} from "uuid";

export type MenuType = {
    id: string
    href: string
    title: string
}

type PostsType = {
    id: string
    postText: string
}

export type DialogsType = {
    id: number
    name: string
    avatar: string
}

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

type stateType = {
    sidebar: {
        menu: MenuType[]
    }
    profilePage: {
        posts: PostsType[]
    },
    messagesPage: {
        dialogs: DialogsType[]
        message: MessageType
        friendMessage: MessageType
    }
}

export const state: stateType = {
    sidebar: {
        menu: [
            {id: v1(), href: '/profile', title: 'Profile'},
            {id: v1(), href: '/messages', title: 'Messages'},
            {id: v1(), href: '/news', title: 'News'},
            {id: v1(), href: '/music', title: 'Music'},
            {id: v1(), href: '/settings', title: 'Settings'}
        ]
    },
    profilePage: {
        posts: [
            {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {id: v1(), postText: ' Lorem ipsum dolor sit amet'},
        ]
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: 'Max', avatar: 'https://via.placeholder.com/150/92c952'},
            {id: 2, name: 'John', avatar: 'https://via.placeholder.com/150/771796'},
            {id: 3, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
            {id: 4, name: 'Jane', avatar: 'https://via.placeholder.com/150/771796'},
            {id: 5, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
            {id: 6, name: 'Alex', avatar: 'https://via.placeholder.com/150/92c952'},
        ],
        message: {
            id: 0,
            user: {
                avatar: avatar,
                name: 'Some Name',
            },
            messageText: {
                text: 'some textsome textsome textsome textsome textsome textsome text',
                time: '22:00'
            },
        }
        ,
        friendMessage: {
            id: 100,
            user:
                {
                    avatar: avatar, // можно менять
                    name:
                        'Friend Name', // можно менять
                }
            ,
            messageText: {
                text: 'зеркальное сообщение', // можно менять
                time:
                    '22:00', // можно менять
            }
            ,
        }
    }
}