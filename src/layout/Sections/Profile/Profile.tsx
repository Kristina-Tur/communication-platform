import styled from "styled-components";
import {ProfileCard} from "./ProfileCard/ProfileCard";
import {Post} from "./Posts/Post/Post";
import {PostsType} from "../../../App";
import {PostInputField} from "./PostInputField/PostInputField";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Section} from "../../../components/Section";
import {ActionType, StateType, StoreType} from "../../../redux/store";
import {PostInputFieldContainer} from "./PostInputField/PostInputFieldContainer";
import {AppRootStateType} from "../../../redux/store-redux";

type ProfilePropsType = {
    store: AppRootStateType
}

export const Profile = (/*{store}: ProfilePropsType*/) => {
    return (
        <Section>
            <Container>
            <BoxWrapper>
                <ProfileCard/>
                <PostInputFieldContainer
                    /*store={store}*/
                />
            </BoxWrapper>
            <PostsWrapper>
                {store.profilePage.posts.map(post => <Post key={post.id} postText={post.postText}/>)}
            </PostsWrapper>
            </Container>
        </Section>
    );
};



const BoxWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;

    @media ${Theme.media.desktop}{
        flex-direction: column;
        align-items: center;
        gap: 50px;
    }
`

const PostsWrapper = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 50px auto;
`