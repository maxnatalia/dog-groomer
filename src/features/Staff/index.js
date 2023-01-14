import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from './data';
import { Section, Title, SectionCenter, Button, Image, IconQuote, Article } from './styled';

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
            <Title>Our Staff</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in sodales urna.
                Cras pharetra orci non risus auctor suscipit ut sit amet nulla. Nulla tempor finibus nulla sit amet bibendum.
                Suspendisse porttitor gravida porta. Mauris ac urna consectetur, gravida risus ut, bibendum nulla.
            </p>
            <p>Fusce suscipit orci nec lacus consequat, eu rhoncus nulla placerat. Sed nec dictum erat.
                Vivamus eu nulla felis. In posuere blandit cursus. In justo nunc, vulputate at massa eget, bibendum bibendum sapien.
                Fusce quis erat libero. Ut ut velit nec ex rutrum feugiat ut quis nisl.
                convallis dui eu libero tincidunt lobortis.</p>
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

export default Staff;