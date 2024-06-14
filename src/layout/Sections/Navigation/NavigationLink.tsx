import { Sn } from "./Navigation_styles";

type PropsType = {
    href: string;
    title: string;
};

export const NavigationLink = ({ href, title }: PropsType) => {
    return (
        <Sn.Link to={href}>{title}</Sn.Link>
    )
}