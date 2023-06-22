
import { HorizontalLine, Icon, StyledTitle, Wrapper } from "./styled";

const Title = ({ text }) => {
    return (
        <>
            <StyledTitle>
                {text}
            </StyledTitle>
            <Wrapper>
                <HorizontalLine />
                <Icon />
            </Wrapper>
        </>
    )
};

export default Title;