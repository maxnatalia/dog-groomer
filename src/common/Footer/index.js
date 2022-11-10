import {
    Container,
    StyledFooter,
    ImageWrapper,
    Img,
    ContactWrapper,
    ContactPhone,
    ContactTitle,
    ContactHours,
    Button,
    SocialsContainer,
    Copywrite,
    ContainerSocial,
    SocialIcon,
    ImgContact,
    PhoneIcon
} from "./styled";
import contact from "./dog-contact.png";
import iconDog from "./logo-white.svg";
import tel from "./phone.svg";
import { social } from "./footerData";

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <ImageWrapper>
                    <ImgContact src={contact} alt='' />
                </ImageWrapper>
                <ContactWrapper>
                    <ContactTitle>
                        Contact with Us
                    </ContactTitle>
                    <ContactPhone>
                        <PhoneIcon src={tel} alt="" />+10 200 500 600 360
                    </ContactPhone>
                    <ContactHours>
                        Opening Hours: Mon - Sun: 10am - 6pm
                    </ContactHours>
                    <Button>Get Appointment</Button>
                </ContactWrapper>
            </Container>
            <SocialsContainer>
                <Img src={iconDog} alt="" />
                <Copywrite>
                    © 2022 Dog Groomer | All Rights Reserved
                </Copywrite>
                <ContainerSocial>
                    {social.map((el, index) => (
                        <SocialIcon href={el.href} key={index}>
                            {el.icon}
                        </SocialIcon>
                    ))}
                </ContainerSocial>
            </SocialsContainer>
        </StyledFooter>
    )
};

export default Footer;