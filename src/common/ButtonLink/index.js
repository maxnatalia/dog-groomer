import React from 'react'
import { StyledButtonLink } from './styled'

const ButtonLink = ({ to, text }) => {
    return (
        <StyledButtonLink
            to={to}
            initial={{ opacity: 0.3 }}
            whileHover={{
                scale: [null, 1.4, 1.3],
                transition: { duration: 0.5 },
            }}
            whileInView={{ opacity: 1 }}
        >
            {text}
        </StyledButtonLink>
    )
};

export default ButtonLink;