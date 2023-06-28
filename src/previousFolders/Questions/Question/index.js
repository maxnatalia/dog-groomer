import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Title } from "../../../common/Title/styled";
import { Paragraph } from "../../../common/Paragraph/styled";
import { Button } from "../styled";


const Question = ({ title, info }) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <Title>{title}</Title>
            {show && <Paragraph>{info}</Paragraph>}
            <Button onClick={() => setShow(!show)}>
                {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </Button>
        </div>
    )
}

export default Question;