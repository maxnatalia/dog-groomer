import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import { Section, SectionCenter, Button, Image, IconQuote, Article } from './styled';

const Slider = () => {
    // const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > data.length - 1) {
                index = 0
            }
            return index
        })
    }

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = data.length - 1
            }
            return index
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
            clearInterval(slider)
        }
    }, [index])

    return (
        <Section>
            <h2>Slider</h2>
            <SectionCenter>
                {data.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    return (
                        <Article
                            activeSlide={index === personIndex}
                            key={id}>
                            <Image src={image} alt={name} />
                            <h2>{name}</h2>
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

export default Slider;