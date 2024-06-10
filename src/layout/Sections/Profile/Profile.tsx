import {Posts} from "./Posts/Posts";
import {PostInput} from "./Posts/PostInput";
import bg from "../../../assets/images/bg.png";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {CardProfile} from "./CardProfile/CardProfile";
import Button from '@mui/material/Button';


export const Profile = () => {
    return (
        <Section>
            <FlexWrapper justifyContent={'space-around'}>
                <CardProfile/>
                <PostInput/>
            </FlexWrapper>
            <PostsWrapper>
                <Posts/>
                <Posts/>
            </PostsWrapper>
            <Button variant="outlined" sx={{color: 'green', p: '100px'}}>Contained</Button>
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