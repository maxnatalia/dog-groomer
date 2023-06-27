import React from 'react'
import { StyledButtonLink } from './styled'

const ButtonLink = ({ to, text }) => {
    return (
        <StyledButtonLink to={to}>{text}</StyledButtonLink>
    )
};

export default ButtonLink