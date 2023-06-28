import { StyledNewsletter, Button, Container, Form, Input } from "./styled";
import { Header } from "../Header/styled";
import { Title } from "../Title/styled";
import { useState } from "react";
import { useEffect } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [popUp, setPopUp] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setNewsletter(true);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPopUp(false);
            setEmail('');
            setError(false);
        }, 3000)
        return () => clearTimeout(timeout);
    }, [popUp]);

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setPopUp(true);
            setNewsletter(false);
        } else if (!email) {
            setError(true);
        }
    }

    return (
        <>
            {popUp &&
                (<StyledNewsletter>
                    <Container>
                        <Header>Thank You for Subscribing</Header>
                        <Title>{email}</Title>
                    </Container>
                </StyledNewsletter>
                )}
            {newsletter ?
                (<StyledNewsletter>
                    <Container>
                        <Header>Newsletter</Header>
                        <Title>You can suscribe our Newsletter</Title>
                        <Form onSubmit={onFormSubmit}>
                            <Input
                                type="email"
                                placeholder="Add your email..."
                                error={error}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Button
                                type="submit"
                            >
                                Suscribe
                            </Button>
                        </Form>
                        <Button
                            onClick={() => {
                                setNewsletter(false);
                                setError(false)
                            }}>
                            Close
                        </Button>
                        {error &&
                            <Title>Please provide your email</Title>
                        }
                    </Container>
                </StyledNewsletter >)
                :
                (<Button
                    special
                    title="Newsletter"
                    onClick={() => setNewsletter(true)}>
                    N
                </Button>)
            }
        </>
    )
}

export default Newsletter;