import dogContact from "./dog-contact.png";
import { BsFillClockFill } from "react-icons/bs";
import { social } from "./footerData";
import Logo from "../../../../common/Logo";
import InfoBar from "../../../../common/InfoBar";
import Contact from "./Contact";
import {
    ContactWrapper,
    ContactInfo,
    Copywrite,
    Image,
    PhoneIcon,
    Wrapper,
    ContainerSocial,
    SocialIcon,
    EmailIcon
} from "./styled";

const Footer = () => {
    return (
        <footer>
            <Contact />
            <InfoBar icon={<BsFillClockFill />} text={"Opening Hours: Mon - Sun: 10am - 6pm"} />
            <ContactWrapper>
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
                            <SocialIcon href={el.href} key={index} title={el.title}>
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