import React, { useEffect, useState } from 'react';


const Listing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/questions')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container mx-auto mt-4">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Question Number</th>
                        <th className="px-4 py-2">Question</th>
                        <th className="px-4 py-2">Option 1</th>
                        <th className="px-4 py-2">Option 2</th>
                        <th className="px-4 py-2">Option 3</th>
                        <th className="px-4 py-2">Option 4</th>
                        <th className="px-4 py-2">Hint</th>
                        <th className="px-4 py-2">Solution</th>
                        <th className="px-4 py-2">Topic</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <td className="border px-4 py-2">{d.id}</td>
                            <td className="border px-4 py-2">{d.question_number}</td>
                            <td className="border px-4 py-2">{d.question}</td>
                            <td className="border px-4 py-2">{d.option1}</td>
                            <td className="border px-4 py-2">{d.option2}</td>
                            <td className="border px-4 py-2">{d.option3}</td>
                            <td className="border px-4 py-2">{d.option4}</td>
                            <td className="border px-4 py-2">{d.hint}</td>
                            <td className="border px-4 py-2">{d.solution}</td>
                            <td className="border px-4 py-2">{d.topic}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Listing;
