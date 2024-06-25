import styled from "styled-components";
import {ProfileCard} from "./ProfileCard/ProfileCard";
import {Post} from "./Posts/Post/Post";
import {PostsType} from "../../../App";
import {PostInputField} from "./PostInputField/PostInputField";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {Section} from "../../../components/Section";
import {ActionType} from "../../../state/state";

type ProfilePropsType = {
    posts: PostsType[]
    postText: string
    dispatch: (action: ActionType) => void
}

export const Profile = ({posts, postText, dispatch}: ProfilePropsType) => {
    return (
        <Section>
            <Container>
            <BoxWrapper>
                <ProfileCard/>
                <PostInputField
                    postText={postText}
                    dispatch={dispatch}
                />
            </BoxWrapper>
            <PostsWrapper>
                {posts.map(post => <Post key={post.id} postText={post.postText}/>)}
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