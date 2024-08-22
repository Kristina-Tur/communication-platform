import styled from "styled-components";
import {ProfileCard} from "./ProfileCard/ProfileCard";
import {Post} from "./Posts/Post/Post";
import {Container} from "../../../../../common/components/Container";
import {Theme} from "../../../../../app/styles/Theme";
import {Section} from "../../../../../common/components/Section";
import {PostInputFieldContainer} from "./PostInputField/PostInputFieldContainer";
import {PostsType, ProfileType} from "../../../model/profile-reducer";
import {StatusCard} from "./StatusCard/StatusCard";
import {Loader} from "../../../../../common/components/loader/Loader";
import React from "react";


type ProfilePropsType = {
    posts: PostsType[]
    profile: null | ProfileType
    status: string
    updateStatus: (status: string) => void;
}

export const Profile = ({posts, profile, status, updateStatus}: ProfilePropsType) => {

    if(!profile){
        return <Loader/>
    }

    return (
        <Section>
            <Container>
                <BoxWrapper>
                    <ProfileCard profile={profile}/>
                    <Wrapper>
                        <StatusCard userName={'lll'} status={status} updateStatus={updateStatus}/>
                        <PostInputFieldContainer/>
                    </Wrapper>

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

    @media ${Theme.media.desktop} {
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
const Wrapper = styled.div`
    max-width: 500px;
    width: 100%;
`
