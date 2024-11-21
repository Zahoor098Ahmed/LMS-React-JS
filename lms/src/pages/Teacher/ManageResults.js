import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseconfig";
import { Input, Button, message } from "antd";

function ManageResults() {
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState("");

  const handleAddResult = async () => {
    if (!studentName || !score) {
      message.error("Please fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "results"), { studentName, score });
      message.success("Result added successfully!");
      setStudentName("");
      setScore("");
    } catch (error) {
      message.error("Failed to add result: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Manage Results</h1>
      <Input
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        className="mb-4"
      />
      <Input
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="mb-4"
      />
      <Button type="primary" onClick={handleAddResult}>
        Add Result
      </Button>
    </div>
  );
}

export default ManageResults;
