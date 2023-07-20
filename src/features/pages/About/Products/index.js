import Section from "../../../../common/Section";
import Title from "../../../../common/Title";
import { Wrapper, Image, Box, Container, ProductBox, Name } from "./styled";
import productsMain from "./productsMain.jpg";
import Paragraph from "../../../../common/Paragraph";
import { dataProducts } from "./dataProducts";

const Products = () => {
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
                {dataProducts.map(({ id, title, content, image }) => <ProductBox key={id} image={image}>
                    <Name>{title}</Name>
                    <Paragraph>{content}</Paragraph>
                </ProductBox>)}
            </Container>
        </Section>
    )
};

export default Products;