import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let currentUser;

app.post("/sign-up", (request, response) => {
	const { username, avatar } = request.body;
	if (username && avatar) {
		users.push(request.body);
		currentUser = avatar;
		response.status(201).send("Ok");
	}
	else {
		response.status(400).send("Todos os campos são obrigatórios!");
	}
});

app.post("/tweets", (request, response) => {
	const { username, tweet } = request.body;
	if (username && tweet) {
		tweets.push({
			username: username,
			avatar: currentUser,
			tweet: tweet
		});
		response.status(201).send("Ok");
	}
	else {
		response.status(400).send("Todos os campos são obrigatórios!");
	}
});

app.get("/tweets", (request, response) => {
	const lastTenTweets = tweets.slice(-10);
	response.send(lastTenTweets);
});

app.listen(5000, () => console.log("O servidor foi iniciado."));