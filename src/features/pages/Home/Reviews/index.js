import { dataReviews } from "./dataReviews";
import { BoxReviews, ButtonLink, IconQuote, Name, Opinion, Review, Testimonials, Title } from "./styled";

const Reviews = () => {
    return (
        <Testimonials>
            <Title>See What Our Customers Have To Say🐶</Title>
            <BoxReviews>
                {dataReviews.map((review) => <Review key={review.id}>
                    <Name>{review.name}</Name>
                    <Opinion>{review.info}</Opinion>
                    <IconQuote />
                </Review>)}
            </BoxReviews>
            <ButtonLink to={""}>Get an Appointment</ButtonLink>
        </Testimonials>
    )
};

export default Reviews;