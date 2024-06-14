import {DialogListType} from "../layout/sections/Dialogs/DialogList";
import {MessageType} from "../layout/sections/Dialogs/MessageList";
import avatar from "../assets/images/avatar.png";
import {v1} from "uuid";

/*export const dialogs: DialogListType[] = [
    {id: 1, name: 'Max', avatar: 'https://via.placeholder.com/150/92c952'},
    {id: 2, name: 'John', avatar: 'https://via.placeholder.com/150/771796'},
    {id: 3, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
    {id: 4, name: 'Jane', avatar: 'https://via.placeholder.com/150/771796'},
    {id: 5, name: 'Mike', avatar: 'https://via.placeholder.com/150/24f355'},
    {id: 6, name: 'Alex', avatar: 'https://via.placeholder.com/150/92c952'},
];
const message: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Some Name',  // можно менять
    },
    message: {
        text: 'some textsome textsome textsome textsome textsome textsome text', // можно менять
        time: '22:00', // можно менять
    },
}
const friendMessage: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Friend Name', // можно менять
    },
    message: {
        text: 'зеркальное сообщение для тренировки css', // можно менять
        time: '22:00', // можно менять
    },
}*/

export const state = {
    profile: {
        posts: [
            {id: v1(), postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
            {id: v1(), postText: ' Lorem ipsum dolor sit amet'},
        ]
    }
}