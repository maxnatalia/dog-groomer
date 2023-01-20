import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import { Section, ImageDog, Wrapper, SectionCenter, Button, Image, IconQuote, Article } from './styled';
import { Header } from "../../common/Header/styled";
import { Paragraph } from "../../common/Paragraph/styled";
import dog from "./dog3.jpg";

const Staff = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > data.length - 1) {
                index = 0
            }
            return index;
        })
    }

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = data.length - 1
            }
            return index;
        })
    }

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > data.length - 1) {
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
        <Section>
            <Header>Our Staff</Header>
            <Wrapper>
                <ImageDog src={dog} alt="dog" />
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in sodales urna.
                    Cras pharetra orci non risus auctor suscipit ut sit amet nulla. Nulla tempor finibus nulla sit amet bibendum.
                    Suspendisse porttitor gravida porta. Mauris ac urna consectetur, gravida risus ut, bibendum nulla.
                    Fusce suscipit orci nec lacus consequat, eu rhoncus nulla placerat.</Paragraph>
            </Wrapper>
            <SectionCenter>
                {data.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;
                    return (
                        <Article
                            activeSlide={index === personIndex}
                            key={id}>
                            <Image src={image} alt={name} />
                            <h3>{name}</h3>
                            <h3>{title}</h3>
                            <p>{quote}</p>
                            <IconQuote />
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