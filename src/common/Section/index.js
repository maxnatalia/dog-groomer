import { useRef } from "react";
import { StyledSection } from "./styled";
import { useInView } from "framer-motion";

const Section = ({ children, id }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <StyledSection ref={ref} id={id}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
        >
            {children}
        </StyledSection >
    )
};

export default Section;