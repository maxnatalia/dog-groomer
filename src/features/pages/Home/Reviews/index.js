import { useState, useEffect } from "react";
import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import ButtonLink from "../../../../common/ButtonLink";
import { dataReviews } from "./dataReviews";
import { Box, BoxLinks, ButtonsBox, IconQuote, Next, Blockquote, Prev, Review } from "./styled";

const Reviews = () => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1
            if (index > dataReviews.length - 1) {
                index = 0
            }
            return index;
        })
    };

    const prevSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1
            if (index < 0) {
                index = dataReviews.length - 1
            }
            return index;
        })
    };

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1
                if (index > dataReviews.length - 1) {
                    index = 0
                }
                return index;
            })
        }, 3000)
        return () => {
            clearInterval(slider);
        }
    }, [index])

    return (
        <Section id={"reviews"}>
            <Title text={"See What Our Customers Have To Say🐶"} extraContent />
            <Box>
                <div>
                    {dataReviews.map((review, reviewIndex) => <Review
                        key={review.id}
                        activeSlide={index === reviewIndex}
                        prevSlide={index === (reviewIndex + dataReviews.length - 1) % dataReviews.length}
                        nextSlide={index === (reviewIndex + 1) % dataReviews.length}
                    >
                        <h3>{review.name}</h3>
                        <Blockquote>{review.info}</Blockquote>
                        <IconQuote />
                    </Review>)}
                </div>
                <ButtonsBox>
                    <Next onClick={nextSlide} title="Next Review" />
                    <Prev onClick={prevSlide} title="Previous Review" />
                </ButtonsBox>
            </Box>
            <BoxLinks>
                <ButtonLink to={"/visit"} text={"Make an Appointment"} />
                <ButtonLink to={"/offer"} text={"See Offert"} />
                <ButtonLink to={"/about"} text={"About Us"} />
            </BoxLinks>
        </Section>
    )
};

export default Reviews;