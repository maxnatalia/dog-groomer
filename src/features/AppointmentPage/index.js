import { Header } from "../../common/Header/styled";
import { Tile } from "../../common/Tile/styled";
import { Title } from "../../common/Title/styled";
import { Paragraph } from "../../common/Paragraph/styled";
import { Container, Section, Fieldset, Form, Span, Input, Textarea, Button, Image, ModalContent, Label } from "./styled";
import { dataContact } from "./dataContact";
import dogApp from "./dog-appointment.png";
import { useState } from "react";

const AppointmentPage = () => {

    const initialState = {
        name: '',
        email: '',
        phone: '',
        msg: '',
    };

    const modalState = {
        state: false,
        content: '',
    }

    const [values, setValues] = useState(initialState);
    const [modal, setModal] = useState(modalState);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, msg } = values;

        if (!name || !email || !phone || !msg) {
            return setModal({ state: true, content: "Please provide data in all fields." })
        }
        setModal({ state: true, content: 'Your message has been delivered.' });
        setValues(initialState);
    }

    return (
        <Section>
            <Header>Contact Us</Header>
            <Container>
                {dataContact.map((item) => {
                    return <Tile key={item.id}>
                        <Title>
                            {item.title}
                        </Title>
                        <Paragraph>
                            {item.subtitle}
                        </Paragraph>
                    </Tile>
                })}
            </Container>
            <Image src={dogApp} alt="dog" />
            <Header>Get an Appointment</Header>
            <Form onSubmit={onFormSubmit}>
                <Fieldset>
                    {modal.state &&
                        <ModalContent>{modal.content}</ModalContent>}
                    <Label>
                        <Span>Full Name:</Span>
                        <Input type="text" name="name" value={values.name} onChange={handleOnChange} />
                    </Label>
                    <Label>
                        <Span>E-mail address:</Span>
                        <Input type="email" name="email" value={values.email} onChange={handleOnChange} />
                    </Label>
                    <Label>
                        <Span>Phone number:</Span>
                        <Input type="tel" name="phone" value={values.phone} onChange={handleOnChange} />
                    </Label>
                    <Label>
                        <Span>Message:</Span>
                        <Textarea name="msg" value={values.msg} onChange={handleOnChange} />
                    </Label>
                    <Button type="submit">Send Form</Button>
                </Fieldset>
            </Form>
        </Section>
    )
};

export default AppointmentPage;