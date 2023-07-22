import { useState } from "react";
import Button from "../../Button";
import Paragraph from "../../Paragraph";
import Modal from "../../Modal";
import Resume from "./Resume";
import visitImage from "./visitImage.png";
import { Form, Image, Label, FieldName, Input, Fieldset, Legend, Wrapper } from "./styled";

const VisitForm = ({ onCloseModal }) => {
    const [resume, setResume] = useState('');

    const initialState = {
        name: '',
        email: '',
        phone: '',
        dog: '',
        breed: '',
        msg: '',
    };

    const [values, setValues] = useState(initialState);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        setResume(`Thank you ${values.name} for visit with ${values.dog} - ${values.breed}. We will be in touch with you by phone(${values.phone}) and email(${values.email}) `);
        setValues(initialState);
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Make an Appointment</Legend>
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
                    <FieldName>Dog's Name:*</FieldName>
                    <Input
                        required
                        type="text"
                        name="dog"
                        value={values.dog}
                        onChange={handleOnChange}
                    />
                </Label>
                <Label>
                    <FieldName>Dog's Breed:*</FieldName>
                    <Input
                        required
                        type="text"
                        name="breed"
                        value={values.breed}
                        onChange={handleOnChange}
                    />
                </Label>
                <Label>
                    <FieldName>Message:</FieldName>
                    <Input
                        as="textarea"
                        name="msg"
                        value={values.msg}
                        onChange={handleOnChange}
                    />
                </Label>
                <Wrapper>
                    <Modal>
                        <Modal.Open opens="formVisit" onEvent="onSubmit" >
                            <Button text={"Send"}
                                type="submit"
                            />
                        </Modal.Open>
                        {resume &&
                            <Modal.Window name="formVisit">
                                <Resume resume={resume} />
                            </Modal.Window>}
                    </Modal>
                    <Image src={visitImage} alt="dog" />
                    <Button text={"Cancel"} type="reset" onClick={() => onCloseModal?.()} />
                </Wrapper>
                <Paragraph>
                    * requiered fields
                </Paragraph>
            </Fieldset>
        </Form>
    )
};

export default VisitForm;