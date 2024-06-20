import avatar from "../assets/images/avatar.png";
import {v1} from "uuid";
import {observe} from "web-vitals/dist/modules/lib/observe";

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

export type StateType = {
    sidebar: {
        menu: MenuType[]
    }
    profilePage: {
        posts: PostsType[]
        postText: string
    },
    messagesPage: {
        dialogs: DialogsType[]
        message: MessageType
        friendMessage: MessageType
    }
}

export type StoreType = {
    _state: {
        sidebar: {
            menu: MenuType[]
        }
        profilePage: {
            posts: PostsType[]
            postText: string
        },
        messagesPage: {
            dialogs: DialogsType[]
            message: MessageType
            friendMessage: MessageType
        }
    }
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    addPost: () => void
    updatePostText: (value: string) => void

}

export let store: StoreType = {
    _state: {
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
            ],
            postText: ''
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
            },
            friendMessage: {
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
            }
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },

    addPost(){
        const newPost = {id: v1(), postText: this._state.profilePage.postText}
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.postText = ''
        this._callSubscriber()
    },
    updatePostText(value: string) {
        this._state.profilePage.postText = value
        this._callSubscriber()
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
}
