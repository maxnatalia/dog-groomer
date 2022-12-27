import { useState } from "react";
import dataReminder from "./dataReminder";

const Reminder = () => {
    const [data, setData] = useState(dataReminder);
    return (
        <main>
            <section>
                <div>
                    <h2>{data.length} Reminder</h2>
                    {data.map(({ id, name, age, image }) =>
                        <div key={id}>
                            <img src={image} alt={name} />
                            <h3>{name}</h3>
                            <p>{age}</p>
                        </div>
                    )}
                    <button onClick={() => setData([])}>Clear Data</button>
                </div>
            </section>
        </main>
    )
}

export default Reminder;