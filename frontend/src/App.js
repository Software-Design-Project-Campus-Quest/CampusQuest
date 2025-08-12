import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quests, setQuests] = useState([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/quests").then((res) => {
      setQuests(res.data);
    });
  }, []);

  const addQuest = () => {
    axios
      .post("http://localhost:5000/api/quests", { name, location })
      .then((res) => {
        setQuests([...quests, res.data]);
        setName("");
        setLocation("");
      });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Campus Quest</h1>

      <div className="mb-6">
        <input
          className="border p-2 mr-2 rounded"
          placeholder="Quest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2 rounded"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          onClick={addQuest}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Quest
        </button>
      </div>

      <ul className="space-y-2">
        {quests.map((q) => (
          <li
            key={q.id}
            className="border p-3 rounded shadow-sm bg-gray-100"
          >
            <strong>{q.name}</strong> - {q.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
