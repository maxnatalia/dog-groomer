import { motion } from "framer-motion";
import { MdContactPhone, MdOutlineAddTask } from "react-icons/md";
import Button from "../Button";
import { ButtonsBox, Letter, MainTitle, StyledHero } from "./styled";

const Hero = ({ buttonsData, backgroundImage }) => {
    const text = "Dog Groomer";

    return (
        <StyledHero backgroundImage={backgroundImage}>
            <ButtonsBox>
                {buttonsData.map(({ as, href, icon, text }, index) => (
                    <motion.div
                        key={href}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 3, delay: index * 0.3 }}
                    >
                        <Button as={as} text={text} href={href} icon={icon} />
                    </motion.div>
                ))}
            </ButtonsBox>
            <ButtonsBox
                common="true"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 3, delay: 2 }}
            >
                <Button text="Contact" href="#contact" icon={<MdContactPhone />} as="a" />
                <Button text="Newsletter" href="#newsletter" icon={<MdOutlineAddTask />} as="a" />
            </ButtonsBox>
            <MainTitle>
                {Array.from(text).map((letter, index) => (
                    letter === ' ' ? (
                        <Letter key={`${letter} - ${index}`}>&nbsp;</Letter>
                    ) : (
                        <Letter
                            key={`${letter} - ${index}`}
                            initial={{ opacity: 0, x: -100, scale: 4 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -100, scale: 4 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            {letter}
                        </Letter>
                    )
                ))}
            </MainTitle>
        </StyledHero >
    )
};

export default Hero;