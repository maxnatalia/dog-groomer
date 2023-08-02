import { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import VisitButton from '../../../../common/Visit/VisitButton';
import Logo from "../../../../common/Logo";
import { navigationData } from './navigationData';
import { Container, Link, List, MobileBox, StyledNavigation } from './styled';

const variants = {
    visible: index => ({
        opacity: 1,
        scale: 1,
        transition: {
            delay: index * 0.3,
        },
    }),
    hidden: {
        opacity: 0,
        scale: 0
    },
};

const Navigation = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(show => !show);
    };

    const handleLinkClick = () => {
        if (show) {
            setShow(false);
        }
    };

    return (
        <StyledNavigation>
            <Container show={show}>
                <Logo />
                <MobileBox onClick={handleClick}>
                    {show ? <FaTimes /> : <FaBars />}
                </MobileBox>
                <List show={show}>
                    <AnimatePresence>
                        {navigationData.map((link, index) => <motion.li
                            key={link.text}
                            custom={index}
                            animate="visible"
                            variants={variants}
                            initial="hidden"
                            exit="hidden"
                        >
                            <Link to={link.to} onClick={handleLinkClick}>
                                {link.text}
                            </Link>
                        </motion.li>
                        )}
                    </AnimatePresence>
                </List>
                <VisitButton />
            </Container>
        </StyledNavigation>
    )
};

export default Navigation;