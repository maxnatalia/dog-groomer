import { HorizontalLine, Icon, StyledTitle, Wrapper } from "./styled";

const Title = ({ text, subtitle }) => {
    return (
        <>
            <StyledTitle subtitle={subtitle}>
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