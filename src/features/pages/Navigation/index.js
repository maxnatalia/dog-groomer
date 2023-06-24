import { navigationData } from './navigationData';
import { Link, List, StyledNavigation } from './styled';
import Logo from "../Logo";

const Navigation = () => {
    return (
        <StyledNavigation>
            <Logo />
            <List>
                {navigationData.map((link) => <li key={link.text}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
                )}
            </List>
        </StyledNavigation>
    )
};

export default Navigation;