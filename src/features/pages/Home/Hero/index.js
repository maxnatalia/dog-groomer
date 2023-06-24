import Button from "../../Button";
import { ButtonsBox, Header, Title } from "./styled";
import { MdOutlinePets } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { TfiGallery } from "react-icons/tfi";
import { MdContactPhone } from "react-icons/md";

const Hero = () => {
    return (
        <Header>
            <ButtonsBox>
                <Button icon={<MdOutlineReviews />} text={"reviews"} />
                <Button icon={<TfiGallery />} text={"gallery"} />
                <Button icon={<MdContactPhone />} text={"contact"} />
            </ButtonsBox>
            <Title>Your Pet's Well-being is Our Priority
                <MdOutlinePets />
            </Title>
        </Header>
    )
};

export default Hero;