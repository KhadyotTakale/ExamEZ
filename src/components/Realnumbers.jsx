import React, { useState, useEffect } from 'react';

const Realnumbers = () => {
    const [showForm, setShowForm] = useState(false);
    const [showDeleteForm, setShowDeleteForm] = useState(false);
    const [deleteChapterId, setDeleteChapterId] = useState('');
    const [deleteLevelId, setDeleteLevelId] = useState('');
    const [deleteQuestionNumber, setDeleteQuestionNumber] = useState('');
    const [chapter_id, setChapterid] = useState('');
    const [level_id, setLevelid] = useState('');
    const [question, setQuestion] = useState('');
    const [question_number, setQuestionNumber] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correct_answer, setCorrectAnswer] = useState('');
    const [hint, setHint] = useState('');
    const [solution, setSolution] = useState('');
    const [topic, setTopic] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('http://localhost:3000/questions')
            .then(res => res.json())
            .then(data => setQuestion(data))
            .catch(err => console.error('Error fetching data:', err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { chapter_id, level_id, question_number, question, option1, option2, option3, option4, correct_answer, hint, solution, topic };
        fetch('http://localhost:3000/questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(() => {
                console.log('Data submitted successfully');
                setChapterid('');
                setLevelid('');
                setQuestionNumber('');
                setQuestion('');
                setOption1('');
                setOption2('');
                setOption3('');
                setOption4('');
                setCorrectAnswer('');
                setHint('');
                setSolution('');
                setTopic('');
                fetchData();
            })
            .catch(err => console.error('Error submitting data:', err));
    };

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        const formData = { chapter_id: deleteChapterId, level_id: deleteLevelId, question_number: deleteQuestionNumber };
        fetch(`http://localhost:3000/questions?chapter_id=${deleteChapterId}&level_id=${deleteLevelId}&question_number=${deleteQuestionNumber}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Question deleted successfully');
                    setDeleteChapterId('');
                    setDeleteLevelId('');
                    setDeleteQuestionNumber('');
                    fetchData(); // Fetch updated question list after deletion
                } else {
                    throw new Error('Failed to delete question');
                }
            })
            .catch(err => console.error('Error deleting question:', err));
    };



    return (
        <div className="container mx-auto mt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowForm(!showForm)}>Add Question</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={() => setShowDeleteForm(!showDeleteForm)}>Delete Question</button>
            {showForm && (
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Chapter ID:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={chapter_id} onChange={(e) => setChapterid(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Level ID:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={level_id} onChange={(e) => setLevelid(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Question Number:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={question_number} onChange={(e) => setQuestionNumber(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Question:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={question} onChange={(e) => setQuestion(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Option 1:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={option1} onChange={(e) => setOption1(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Option 2:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={option2} onChange={(e) => setOption2(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Option 3:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={option3} onChange={(e) => setOption3(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Option 4:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={option4} onChange={(e) => setOption4(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Correct Answer:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={correct_answer} onChange={(e) => setCorrectAnswer(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Hint:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={hint} onChange={(e) => setHint(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Solution:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={solution} onChange={(e) => setSolution(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Topic:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={topic} onChange={(e) => setTopic(e.target.value)} required />
                            </label>
                        </div>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </form>
            )}
            {showDeleteForm && (
                <form className="mt-4" onSubmit={handleDeleteSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Chapter ID:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={deleteChapterId} onChange={(e) => setDeleteChapterId(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Level ID:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={deleteLevelId} onChange={(e) => setDeleteLevelId(e.target.value)} required />
                            </label>
                        </div>
                        <div>
                            <label className="block">
                                <span className="text-gray-700">Question Number:</span>
                                <input type="text" className="mt-1 p-2 border rounded w-full" value={deleteQuestionNumber} onChange={(e) => setDeleteQuestionNumber(e.target.value)} required />
                            </label>
                        </div>
                    </div>
                    <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="submit">Delete</button>
                </form>
            )}
        </div>
    );
}

export default Realnumbers;
