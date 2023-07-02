import Button from "../../Button";
import InfoBar from "../../InfoBar";
import { Input, InputWrapper, StyledNewsletter } from "./styled";
import { MdOutlineAddTask } from "react-icons/md";
import { MdOutlineDataSaverOn } from "react-icons/md";

const Newsletter = () => {
    return (
        <StyledNewsletter id="newsletter">
            <InfoBar text="Join Our Newsletter" icon={<MdOutlineDataSaverOn />} />
            <InputWrapper>
                <Input type="email" name="email" placeholder="Add your email..." />
                <Button text="join in" icon={<MdOutlineAddTask />} />
            </InputWrapper>
        </StyledNewsletter>
    )
};

export default Newsletter;