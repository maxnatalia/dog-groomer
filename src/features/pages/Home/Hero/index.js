import {
    MdContactPhone,
    MdPhotoLibrary,
    MdOutlineAddTask,
    MdCleaningServices,
    MdOutlineReviews,
} from "react-icons/md";
import Button from "../../../../common/Button";
import Title from "../../../../common/Title";
import { ButtonsBox, Header } from "./styled";

const Hero = () => {
    return (
        <Header>
            <ButtonsBox>
                <Button as="a" href="#services" icon={<MdCleaningServices />} text={"services"} />
                <Button as="a" href="#reviews" icon={<MdOutlineReviews />} text={"reviews"} />
                <Button as="a" href="#gallery" icon={<MdPhotoLibrary />} text={"gallery"} />
                <Button as="a" href="#contact" icon={<MdContactPhone />} text={"contact"} />
                <Button as="a" href="#newsletter" icon={<MdOutlineAddTask />} text={"newsletter"} />
            </ButtonsBox>
            <Title as={"h1"} text={"Your Pet's Well-being is Our Priority"} mainTitle />
        </Header>
    )
};

export default Hero;