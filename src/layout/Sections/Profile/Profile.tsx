import bg from "../../../assets/images/bg.png";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {CardProfile} from "./CardProfile/CardProfile";
import {PostInput} from "./Posts/PostInput";
import {Post} from "./Posts/Post/Post";
import {useState} from "react";
import {v1} from "uuid";
import {PostsType} from "../../../App";

type ProfilePropsType = {
    posts: PostsType[]
    addPost: (value: string) => void
}

export const Profile = ({posts, addPost}: ProfilePropsType) => {
    return (
        <Section>
            <FlexWrapper justifyContent={'space-around'}>
                <CardProfile/>
                <PostInput
                    addPost={addPost}
                />
            </FlexWrapper>
            <PostsWrapper>
                {posts.map(post => <Post key={post.id} postText={post.postText}/>)}
            </PostsWrapper>
        </Section>
    );
};

const Section = styled.section`
    background-image: url(${bg});
    background-size: auto 200px;
    background-repeat: no-repeat;
    background-color: #c8e0ff33;

    padding-top: 135px;
    flex-grow: 1;
`

const PostsWrapper = styled.div`
    max-width: 1170px;
    width: 100%;
    margin: 50px auto;
`