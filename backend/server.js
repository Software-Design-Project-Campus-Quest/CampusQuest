import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let quests = [
  { id: 1, name: "Find the Library", location: "Campus Library" },
  { id: 2, name: "Great Hall Quest", location: "Great Hall" }
];

// GET all quests
app.get("/api/quests", (req, res) => {
  res.json(quests);
});

// POST a new quest
app.post("/api/quests", (req, res) => {
  const { name, location } = req.body;
  const newQuest = { id: quests.length + 1, name, location };
  quests.push(newQuest);
  res.status(201).json(newQuest);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
