import Button from "../../Button";
import Paragraph from "../../Paragraph";
import Modal from "../../Modal";
import Resume from "./Resume";
import visitImage from "./visitImage.png";
import useFormVisit from "./useFormVisit";
import { Form, Image, Label, FieldName, Input, Fieldset, Legend, Wrapper, PriceBox } from "./styled";

const weights = ["Select...", "1-9 kg", "10-19 kg", "20-29 kg", "30-39 kg"];
const offers = ["Select...", "smart", "premium", "royal"];

const VisitForm = ({ onCloseModal }) => {
    const { onFormSubmit, handleOnChange, resume, price, values } = useFormVisit();

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
                    <FieldName>Dog's Weight:*</FieldName>
                    <Input
                        as="select"
                        required
                        name="weight"
                        value={values.weight}
                        onChange={handleOnChange}>
                        {weights.map((weight) => (
                            <option key={weight}>{weight}</option>
                        ))}
                    </Input>
                </Label>
                <Label>
                    <FieldName>Offer:*</FieldName>
                    <Input
                        as="select"
                        required
                        name="offer"
                        value={values.offer}
                        onChange={handleOnChange}>
                        {offers.map((offer) => (
                            <option key={offer}>{offer}</option>
                        ))}
                    </Input>
                </Label>
                {price > 0 &&
                    <PriceBox>
                        You chose the offer {values.offer} for a dog weighing {values.weight}, so the price is {price} $
                    </PriceBox>
                }
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