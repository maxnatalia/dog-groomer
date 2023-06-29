import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import dog3 from "./dog3.jpg";
import dog4 from "./dog4.jpg";
import dog5 from "./dog5.jpg";
import dog6 from "./dog6.png";
import dog7 from "./dog7.png";
import { BoxGallery, Image, Item } from "./styled";

const Gallery = () => {
    return (
        <Section id={"gallery"}>
            <Title text={"See How We Work - Gallery"} extraContent />
            <BoxGallery>
                <Item one>
                    <Image src={dog1} alt="dog1" />
                </Item>
                <Item two>
                    <Image src={dog2} alt="dog2" />
                </Item>
                <Item three>
                    <Image src={dog3} alt="dog3" />
                </Item>
                <Item four>
                    <Image src={dog4} alt="dog4" />
                </Item>
                <Item five>
                    <Image src={dog5} alt="dog5" />
                </Item>
                <Item six>
                    <Image src={dog6} alt="dog6" />
                </Item>
                <Item seven>
                    <Image src={dog7} alt="dog7" />
                </Item>
            </BoxGallery>
        </Section>
    )
};

export default Gallery;