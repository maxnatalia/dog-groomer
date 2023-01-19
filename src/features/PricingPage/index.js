import { useState, useEffect } from "react";
import { dataServicePrice } from "./dataServicePrice";
import { Section, Wrapper, Category, PriceContainer, CategoryName, CategoryWeight } from "./styled";
import { Header } from "../../common/Header/styled";
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
            <h3>Choose your dog category</h3>
            <h4>How big your dog is?</h4>
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
                            <img src={image} alt={name} />
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