import { useState } from "react";
import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import Paragraph from "../../../../common/Paragraph";
import productsMain from "./productsMain.jpg";
import { dataProducts } from "./dataProducts";
import { Wrapper, Image, Box, Container, ProductBox, Name, Content, Icon } from "./styled";

const Products = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const handleSelectedCard = (id) => {
        setSelectedCard(id !== selectedCard ? id : null);
    };

    return (
        <Section id={"products"}>
            <Title text={"Why you can trust the products we use?"} extraContent />
            <Wrapper>
                <Image src={productsMain} alt="productImage" />
                <Box>
                    <Paragraph>
                        Our priority is the well-being of your dog, which is why we exclusively use high-quality products that guarantee your pet's health,
                        safety, and a stunning appearance. We assure you that after a visit to our salon, your dog will feel fantastic and look their absolute best!
                    </Paragraph>
                </Box>
            </Wrapper>
            <Container>
                {dataProducts.map((product) => <ProductBox key={product.id}
                    image={product.image}
                    title={"See more details..."}
                    onClick={() => handleSelectedCard(product.id)}
                >
                    <Name>{product.title}</Name>
                    <Icon clicked={selectedCard === product.id} />
                    <Content clicked={selectedCard === product.id}>
                        <Paragraph>{product.content}</Paragraph>
                    </Content>
                </ProductBox>)}
            </Container>
        </Section>
    )
};

export default Products;