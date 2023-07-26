import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import { offerData, serviceLists } from "./offerData";
import { Tile, Container, Box, List, Wrapper, Image, Item } from "./styled";

const SectionOffert = ({ offerType }) => {
    return (
        <Section id={offerType}>
            <Title text={`${serviceLists[offerType].title}`} extraContent />
            <Container>
                <List>
                    {serviceLists[offerType].list.map((item) => (
                        <Item key={item}>{item}</Item>
                    ))}
                </List>
                <Box>
                    {offerData[offerType].map((item) => (
                        <Tile key={item.id}>
                            <p>
                                {item.name} - {item.dogCategory}
                            </p>
                            <Wrapper>
                                <Image src={item.image} alt={item.dogCategory} />
                                <p>Price: {item.price}$</p>
                            </Wrapper>
                        </Tile>
                    ))}
                </Box>
            </Container>
        </Section>
    );
};

export default SectionOffert;