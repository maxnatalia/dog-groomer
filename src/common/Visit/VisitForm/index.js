import visitImage from "./visitImage.png";
import { Image, Label, FieldName, Input, Textarea, Fieldset, Wrapper } from "./styled";
import { useState } from "react";
import Button from "../../Button";
import Paragraph from "../../Paragraph";

const VisitForm = ({ onCloseModal }) => {
    const initialState = {
        name: '',
        email: '',
        phone: '',
        msg: '',
    };

    const [values, setValues] = useState(initialState);
    const [message, setMessage] = useState("Please fill all fields");

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone } = values;

        if (!name || !email || !phone) {
            return setMessage("Please provide data in requiered fields.")
        }
        setMessage('Your message has been delivered.');
        setValues(initialState);
        onCloseModal?.();
    };

    return (
        <>
            <Image src={visitImage} alt="dog" />
            <form onSubmit={onFormSubmit}>
                {message &&
                    <Paragraph>{message}</Paragraph>}
                <Fieldset>
                    <Label>
                        <FieldName>Full Name:*</FieldName>
                        <Input
                            required
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleOnChange}
                        />
                    </Label>
                    <Label>
                        <FieldName>E-mail address:*</FieldName>
                        <Input
                            required
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleOnChange}
                        />
                    </Label>
                    <Label>
                        <FieldName>Phone number:*</FieldName>
                        <Input
                            required
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                            placeholder="Format: 123-456-789"
                            type="tel"
                            name="phone"
                            value={values.phone}
                            onChange={handleOnChange}
                        />
                    </Label>
                    <Label>
                        <FieldName>Message:</FieldName>
                        <Textarea
                            name="msg"
                            value={values.msg}
                            onChange={handleOnChange}
                        />
                    </Label>
                    <Wrapper>
                        <Button text={"Cancel"} type="reset" onClick={() => onCloseModal?.()} />
                        <Button text={"Send Form"}
                            type="submit"
                        />
                    </Wrapper>
                    <Paragraph>
                        * requiered fields
                    </Paragraph>
                </Fieldset>
            </form>
        </>
    )
};

export default VisitForm;