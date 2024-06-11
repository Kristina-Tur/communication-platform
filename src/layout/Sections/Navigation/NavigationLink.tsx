import { S } from "./Navigation_styles";

type PropsType = {
    href: string;
    title: string;
};

export const NavigationLink = ({ href, title }: PropsType) => {
    return (
        <S.Link to={href}>{title}</S.Link>
    )
}