import { useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";
import Button from "../../../../../common/Button";
import Modal from "../../../../../common/Modal";
import ConfirmMessage from "./ConfirmMessage";
import { Input, Form } from "./styled";

const FormNewsletter = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleEmail = (e) => setEmail(e.target.value);
    const handleName = (e) => setName(e.target.value);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        setMessage(`Thank you ${name} for your email: ${email}`);
        setEmail("");
        setName("");
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
                placeholder="Add your name..."
                required
            />
            <Input
                type="email"
                name="email"
                value={email}
                onChange={handleEmail}
                placeholder="Add your email..."
                required
            />
            <Modal>
                <Modal.Open opens="message" onEvent="onSubmit">
                    <Button
                        type="submit"
                        text={"Join in"}
                        icon={<MdOutlineAddTask />}
                    />
                </Modal.Open>
                {message &&
                    <Modal.Window name="message">
                        <ConfirmMessage message={message} />
                    </Modal.Window>}
            </Modal>
        </Form>
    )
};

export default FormNewsletter;