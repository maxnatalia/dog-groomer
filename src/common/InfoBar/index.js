import { StyledInfoBar, Icon, InfoTitle, AnimateSpan } from "./styled";

const InfoBar = ({ icon, text }) => {
    return (
        <StyledInfoBar>
            <AnimateSpan
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                }}
            >
                <Icon>{icon}</Icon>
                <InfoTitle>{text}</InfoTitle>
            </AnimateSpan>
        </StyledInfoBar>
    )
};

export default InfoBar;