import React from "react";
import { Sn } from "./Navigation_styles";

export const Navigation = () => {
    return (
        <Sn.Nav>
            <Sn.Ul>
                <Sn.Li>
                    <Sn.Link to="/profile">Profile</Sn.Link>
                </Sn.Li>
                <Sn.Li>
                    <Sn.Link to="/dialogs">Messages</Sn.Link>
                </Sn.Li>
                <Sn.Li>
                    <Sn.Link to="/news">News</Sn.Link>
                </Sn.Li>
                <Sn.Li>
                    <Sn.Link to="/music">Music</Sn.Link>
                </Sn.Li>
                <Sn.Li>
                    <Sn.Link to="/settings">Settings</Sn.Link>
                </Sn.Li>
            </Sn.Ul>
        </Sn.Nav>
    );
};