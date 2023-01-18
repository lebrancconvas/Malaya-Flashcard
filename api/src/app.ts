import express from 'express';

const app = express();

const PORT = process.env.PORT || 8003;

app.get("/", (req, res) => {
	res.send("Hello, API.");
})

app.listen(8003, () => {
	console.log(`[SUCCESS] API Server is running on the port ${PORT}`); 
})