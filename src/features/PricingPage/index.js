import { useState, useEffect } from "react";
import { dataServicePrice } from "./dataServicePrice";
import { Section, Wrapper, Category, PriceContainer, Image, CategoryName, CategoryWeight } from "./styled";
import { Header } from "../../common/Header/styled";
import { Title } from "../../common/Title/styled";
import Service from "./Service";

const PricingPage = () => {
    const [services, setServices] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        setServices(dataServicePrice[0].services);
    }, []);

    const getService = name => {
        const newService = dataServicePrice.find((service) => {
            return service.name === name
        });
        setServices(newService.services);
    }

    return (
        <Section>
            <Header>Prices</Header>
            <Title>Choose your dog category - How big your dog is?</Title>
            <Wrapper>
                {dataServicePrice.map((service, index) => {
                    const { image, name, dogCategory } = service;
                    return (
                        <Category
                            key={index}
                            activeDog={active === index}
                            onClick={() => {
                                getService(name);
                                setActive(index)
                            }}>
                            <Image src={image} alt={name} />
                            <CategoryName
                                activeDog={active === index}
                            >
                                {name}
                            </CategoryName>
                            <CategoryWeight
                                activeDog={active === index}
                            >
                                {dogCategory}
                            </CategoryWeight>
                        </Category>)
                })}
            </Wrapper>
            <PriceContainer>
                <Service services={services} />
            </PriceContainer>
        </Section>
    )
};

export default PricingPage;