import { useState } from "react";
import ButtonLink from "../../../../common/ButtonLink";
import Title from "../../../../common/Title";
import Section from "../../../../common/Section";
import Paragraph from "../../../../common/Paragraph";
import IconPet from "../../../../common/IconPet";
import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";
import { servicesData } from "./servicesData";
import { Image, ImageWrapper, Wrapper, Container, Summary, Icon, Number, SummaryBox, Name } from "./styled";

const Services = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <Section id={"services"}>
            <Title text={"Exceptional Dog Grooming Services"} extraContent />
            <Container>
                <ImageWrapper>
                    <Image
                        photoOne
                        src={dog1}
                        alt="dog1"
                    />
                    <Image
                        photoThree
                        src={dog3}
                        alt="dog3"
                    />
                    <Image
                        photoTwo
                        src={dog2}
                        alt="dog2"
                    />
                </ImageWrapper>
                <Wrapper>
                    <IconPet />
                    <Paragraph >Well-groomed and beautiful coat is every dog owner's dream.</Paragraph>
                    <Paragraph >Our dog grooming company is ready to provide your furry companion with the highest quality care.</Paragraph>
                    <Paragraph> Our experience, knowledge, and love for animals make every interaction with your four-legged friend an unforgettable experience.</Paragraph>
                    <IconPet reverse />
                    <ButtonLink to={""} text={"see service offer"} />
                </Wrapper>
            </Container>
            <Summary>
                {servicesData.map((item, index) => <SummaryBox
                    key={item.title}
                    title={item.title}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    {hoveredIndex === index && <Name>{item.title}</Name>}
                    <Icon>{item.img}</Icon>
                    <Number>{item.number}</Number>
                </SummaryBox>
                )}
            </Summary>
        </Section>
    )
};

export default Services;