import React from "react";
import { S } from "./Navigation_styles";

export const Navigation = () => {
    return (
        <S.Nav>
            <S.Ul>
                <S.Li>
                    <S.Link to="/profile">Profile</S.Link>
                </S.Li>
                <S.Li>
                    <S.Link to="/dialogs">Messages</S.Link>
                </S.Li>
                <S.Li>
                    <S.Link to="/news">News</S.Link>
                </S.Li>
                <S.Li>
                    <S.Link to="/music">Music</S.Link>
                </S.Li>
                <S.Li>
                    <S.Link to="/settings">Settings</S.Link>
                </S.Li>
            </S.Ul>
        </S.Nav>
    );
};