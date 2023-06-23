import { Info, StyledContent, Image, ImageWrapper, Wrapper, Container, IconPet } from "./styled";
import Title from "../../Title";
import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";


const Content = () => {
    return (
        <StyledContent>
            <Title text={"Exceptional Dog Grooming Services"} />
            <Container>
                <ImageWrapper>
                    <Image
                        photoOne
                        src={dog1}
                        alt="plant photo1"
                    />
                    <Image
                        photoThree
                        src={dog3}
                        alt="plant photo3"
                    />
                    <Image
                        photoTwo
                        src={dog2}
                        alt="plant photo2"
                    />
                </ImageWrapper>
                <Wrapper>
                    <IconPet />
                    <Info>
                        Well-groomed and beautiful coat is every dog owner's dream.
                    </Info>
                    <Info>
                        Our dog grooming company is ready to provide your furry companion with the highest quality care.
                    </Info>
                    <Info>
                        Our experience, knowledge, and love for animals make every interaction with your four-legged friend an unforgettable experience.
                    </Info>
                    <IconPet reverse />
                </Wrapper>
            </Container>
        </StyledContent>
    )
};

export default Content;