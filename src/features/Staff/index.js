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
            <Wrapper header>
                <Header>Our Staff</Header>
                <ImageDog src={dog} alt="dog" />
            </Wrapper>
            <Wrapper>
                <Paragraph>
                    The staff at our dog grooming salon are a group of highly qualified and experienced professionals. Each of our groomers holds certificates and diplomas from reputable animal grooming schools. They are all passionate about their work and love animals, which is extremely important to us.
                </Paragraph>
                <Paragraph>
                    Our staff has years of experience in caring for and styling different dog breeds, allowing us to provide our clients with the best services and results. Our groomers are able to adapt to the individual needs and requirements of each dog to ensure the best experience during their visit with us.
                </Paragraph>
                <Paragraph>
                    Additionally, our staff receives regular training and learns new techniques and tools to provide our clients with the best and latest services. We are proud of our staff and their commitment to providing the best care for our four-legged clients.
                </Paragraph>
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