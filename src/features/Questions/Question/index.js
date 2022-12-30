import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <h3>{title}</h3>
            {show && <p>{info}</p>}
            <button onClick={() => setShow(!show)}>
                {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </button>
        </div>
    )
}

export default Question;