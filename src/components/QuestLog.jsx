import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuestLog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [completed, setCompleted] = useState(false);

    const quest = location.state?.quest;

    if (!quest) {
        return <p>No quest accepted. Please visit the Quest Manager.</p>;
    }

    const handleMarkComplete = () => {
        setCompleted(true);
    };

    return (
        <div className="quest-log">
            <h1>Quest Log</h1>
            <h2>{quest.name}</h2>
            <p>Task: {quest.task}</p>
            <p>Status: {completed ? "Completed" : "In Progress"}</p>
            {!completed && (
                <button onClick={handleMarkComplete}>Mark as Completed</button>
            )}
            {completed && <p>Congratulations on completing your quest!</p>}
            <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
        </div>
    );
};

export default QuestLog;
