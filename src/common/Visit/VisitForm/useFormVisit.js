import { useEffect, useState } from "react";

const initialState = {
    name: '',
    email: '',
    phone: '',
    dog: '',
    breed: '',
    weight: '',
    offer: '',
    msg: '',
};

const prices = {
    "1-9 kg": { smart: 20, premium: 40, royal: 60 },
    "10-19 kg": { smart: 80, premium: 100, royal: 120 },
    "20-29 kg": { smart: 140, premium: 160, royal: 180 },
    "30-39 kg": { smart: 200, premium: 210, royal: 220 },
};

const useFormVisit = () => {
    const [price, setPrice] = useState('');
    const [resume, setResume] = useState('');
    const [values, setValues] = useState(initialState);

    useEffect(() => {
        const calculatePrice = () => {
            const newPrice = prices[values.weight]?.[values.offer] || 0;
            setPrice(newPrice);
        };
        calculatePrice();
    }, [values.weight, values.offer]);

    const handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setValues({ ...values, [name]: value });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (price === 0) return
        const message = `Thank you, ${values.name}, for scheduling a visit with ${values.dog} - ${values.breed}.
            You chose ${values.offer} offer for dog's weight ${values.weight}, so prepare ${price} $.
            We will be in touch with you by phone(${values.phone}) and email(${values.email}).`;
        setResume(message);
        setValues(initialState);
    };

    return { onFormSubmit, handleOnChange, resume, price, values }
}

export default useFormVisit;