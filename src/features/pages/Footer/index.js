import dogContact from "./dog-contact.png";
import { social } from "./footerData";
import Logo from "../Logo";
import {
    ContactWrapper,
    ContactInfo,
    ContactTitle,
    Copywrite,
    Image,
    PhoneIcon,
    Wrapper,
    ContainerSocial,
    SocialIcon,
    ClockIcon,
    EmailIcon
} from "./styled";

const Footer = () => {
    return (
        <footer>
            <ContactInfo underline>
                <ClockIcon />Opening Hours: Mon - Sun: 10am - 6pm
            </ContactInfo>
            <ContactWrapper>
                {/* <ContactTitle>
                    Contact
                </ContactTitle> */}
                <div>
                    <ContactInfo>
                        <PhoneIcon />
                        500 600 360
                    </ContactInfo>
                    <ContactInfo>
                        <EmailIcon />
                        dog@groomer.com
                    </ContactInfo>
                    <ContainerSocial>
                        {social.map((el, index) => (
                            <SocialIcon href={el.href} key={index}>
                                {el.icon}
                            </SocialIcon>
                        ))}
                    </ContainerSocial>
                </div>
            </ContactWrapper>
            <Wrapper>
                <Image src={dogContact} alt="" />
                <Logo />
                <Copywrite>
                    © {new Date().getFullYear()} Dog-Groomer | All Rights Reserved
                </Copywrite>
            </Wrapper>
        </footer>
    )
};

export default Footer;