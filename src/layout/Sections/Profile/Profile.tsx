import bg from "../../../assets/images/bg.png";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {CardProfile} from "./CardProfile/CardProfile";
import {PostInput} from "./Posts/PostInput";
import {Post} from "./Posts/Post/Post";
import {useState} from "react";
import {v1} from "uuid";


export const Profile = () => {
    const [posts, setPosts] = useState([
        {id: 1, postText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
        {
            id: 2,
            postText: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laciniaodio vitae vestibulum vestibulum.'
        },
    ])

    const addPost = (postContent: string) => {
        const newPost = {id: 3, postText: postContent}
        setPosts([newPost, ...posts])
    }

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