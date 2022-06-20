import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];

app.post("/sign-up", (request, response) => {
	const { username, avatar } = request.body;
	if (username.length > 0 && avatar.length > 0) {
		users.push(request.body);
		response.send("Ok");
	}
	else {
		response.send("Erro");
	}
});

app.listen(5000, () => console.log("O servidor foi iniciado."));