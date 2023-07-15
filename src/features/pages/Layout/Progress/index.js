import { useScroll, useSpring } from "framer-motion";
import { StyledProgress } from "./styled";

const Progress = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <StyledProgress style={{ scaleX }} />
    )
};

export default Progress;