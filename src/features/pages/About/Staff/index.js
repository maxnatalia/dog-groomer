import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import Paragraph from "../../../../common/Paragraph";
import { staffData } from "./staffData";
import { Wrapper, SectionCenter, Article, Image, Button } from "./styled";

const Staff = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > staffData.length - 1) {
                index = 0
            }
            return index;
        })
    };

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = staffData.length - 1
            }
            return index;
        })
    };

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > staffData.length - 1) {
                    index = 0
                }
                return index
            })
        }, 3000)
        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <Section id={"staff"}>
            <Title text={"Our Staff"} extraContent />
            <Wrapper>
                <Paragraph>
                    The staff at our dog grooming salon are a group of highly qualified and experienced professionals.
                    Each of our groomers holds certificates and diplomas from reputable animal grooming schools.
                    They are all passionate about their work and love animals, which is extremely important to us.
                </Paragraph>
            </Wrapper>
            <SectionCenter>
                {staffData.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;
                    return (
                        <Article
                            activeSlide={index === personIndex}
                            key={id}>
                            <Image src={image} alt={name} />
                            <h3>{name}</h3>
                            <h3>{title}</h3>
                            <p>{quote}</p>
                        </Article>
                    )
                })}
                <Button left onClick={prevSlide}><FiChevronLeft /></Button>
                <Button right onClick={nextSlide}><FiChevronRight /></Button>
            </SectionCenter>
        </Section>
    )
};

export default Staff;