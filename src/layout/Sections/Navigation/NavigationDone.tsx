import { NavigationLink } from "./NavigationLink";
import { Sn } from "./Navigation_styles";



export const NavigationDone = () => {
    const navigationInfo = [
        { href: "/profile", title: "Profile" },
        { href: "/dialogs", title: "Messages" },
        { href: "/news", title: "News" },
        { href: "/music", title: "Music" },
        { href: "/settings", title: "Settings" },
    ];

    return (
        <Sn.Nav>
            <Sn.Ul>
                {navigationInfo.map((data) => <NavigationLink href={data.href} title={data.title} />)}
            </Sn.Ul>
        </Sn.Nav>
    );
};