const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khadyot@123',
    database: 'examez'
});


app.get('/', (req, res) => {
    return res.send('from backend');
})

// Route to handle tutor signup login
app.get('/tutor', (req, res) => {
    const sql = "SELECT * FROM Tutor";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

app.post('/tutor', (req, res) => {
    const { name, email, password, instituteId } = req.body;

    if (name) {
        const sql = "INSERT INTO Tutor (institute_id, name, email, password) VALUES (?, ?, ?, ?)";
        db.query(sql, [instituteId, name, email, password], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(201).send('Tutor added');
        });
    } else {
        const sql = "SELECT * FROM Tutor WHERE institute_id = ? AND email = ? AND password = ?";
        db.query(sql, [instituteId, email, password], (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, error: err });
            }

            if (result.length === 1) {
                // Credentials match, return success response
                return res.status(200).json({ success: true, tutor: result[0] });
            } else {
                // Invalid credentials, return error response
                return res.status(401).json({ success: false, error: 'Invalid credentials' });
            }
        });
    }
});

// Route to handle question entry

app.get('/questions', (req, res) => {
    const sql = "SELECT * FROM Question";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});

app.post('/questions', (req, res) => {
    const { chapter_id, level_id, question_number, question, option1, option2, option3, option4, correct_answer, hint, solution, topic } = req.body;
    const sql = "INSERT INTO Question (chapter_id, level_id, question_number, question, option1, option2, option3, option4, correct_answer, hint, solution, topic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sql, [chapter_id, level_id, question_number, question, option1, option2, option3, option4, correct_answer, hint, solution, topic], (err, result) => {
        if (err) return res.status(500).json(err);
        return res.status(201).send('Question added');
    });
});
app.delete("/questions", (req, res) => {
    const { chapter_id, level_id, question_number } = req.query;


    if (!chapter_id || !level_id || !question_number) {
        return res.status(400).json({ message: "Missing required parameters" });
    }

    const sqlDelete = "DELETE FROM Question WHERE chapter_id = ? AND level_id = ? AND question_number = ?";
    db.query(sqlDelete, [chapter_id, level_id, question_number], (err, result) => {
        if (err) {
            console.error("Error deleting question:", err);
            return res.status(500).json({ message: "Error deleting question" });
        }
        return res.status(200).json({ message: "Question deleted successfully" });
    });
});


// Route to handle student login signup 

app.get("/students", (req, res) => {
    const sql = "SELECT * FROM Student";
    db.query(sql, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
});


app.post('/students', (req, res) => {
    const { name, email, password, instituteId } = req.body;

    if (name) {
        const sql = "INSERT INTO Student (institute_id, name, email, password) VALUES (?, ?, ?, ?)";
        db.query(sql, [instituteId, name, email, password], (err, result) => {
            if (err) return res.status(500).json(err);
            return res.status(201).send('student added');
        });
    } else {
        const sql = "SELECT * FROM Student WHERE institute_id = ? AND email = ? AND password = ?";
        db.query(sql, [instituteId, email, password], (err, result) => {
            if (err) {
                return res.status(500).json({ success: false, error: err });
            }

            if (result.length === 1) {
                return res.status(200).json({ success: true, tutor: result[0] });
            } else {
                return res.status(401).json({ success: false, error: 'Invalid credentials' });
            }
        });
    }
});




// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
