import { useState } from "react";
import { Section, Image, Container, Wrapper, Button } from "./styled";
import { dataReminder } from "./dataReminder";

const Reminder = () => {
    const [data, setData] = useState(dataReminder);

    const removeItem = (id) => {
        let newData = data.filter((item) => item.id !== id);
        return setData(newData);
    }
    return (

        <Section>
            <Container>
                <h2>{data.length} Reminder</h2>
                {data.map(({ id, name, age, image }) =>
                    <Wrapper key={id}>
                        <Image src={image} alt={name} />
                        <h3>{name}</h3>
                        <p>{age}</p>
                        <button onClick={() => removeItem(id)}>Remove</button>
                    </Wrapper>
                )}
                <Button onClick={() => setData([])}>Clear Data</Button>
            </Container>
        </Section>

    )
}

export default Reminder;