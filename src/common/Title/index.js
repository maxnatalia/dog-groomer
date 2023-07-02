import { useRef } from "react";
import { HorizontalLine, Icon, StyledTitle, Wrapper } from "./styled";
import { useInView } from "framer-motion";

const Title = ({ text, extraContent = null }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const animationStyle = {
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    };

    return (
        <div ref={ref}>
            <StyledTitle
                style={animationStyle}
            >
                {text}
            </StyledTitle>

            {extraContent !== null &&
                <Wrapper style={animationStyle}>
                    <HorizontalLine />
                    <Icon />
                </Wrapper>
            }
        </div>
    )
};

export default Title;