import {
    Container,
    StyledFooter,
    ImageWrapper,
    Img,
    ContactWrapper,
    ContactPhone,
    ContactTitle,
    ContactHours,
    SocialsContainer,
    Copywrite,
    ContainerSocial,
    SocialIcon,
    ImgContact,
    PhoneIcon,
    Div,
    IconArrow
} from "./styled";
import contact from "./dog-contact.png";
import iconDog from "./logo-white.svg";
import tel from "./phone.svg";
import { social } from "./footerData";
import { Button } from "../Button/styled";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
        window.scrollY > 100 ? setVisible(true) : setVisible(false)
    })

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
                    <Link to="/appointment" >
                        <Button>Get Appointment</Button>
                    </Link>
                </ContactWrapper>
                {visible ? <Div as="a" href="#">
                    <IconArrow />
                </Div> : null}
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