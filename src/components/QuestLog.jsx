import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./styles.css";

const QuestLog = () => {
    const { acceptedQuests, completeQuest } = useContext(UserContext);

    return (
        <div className="quest-log">
            <h1>Quest Log</h1>
            {acceptedQuests.length > 0 ? (
                <ul>
                    {acceptedQuests.map((quest, index) => (
                        <li key={index} className="quest-log-item">
                            <p>{quest.description}</p>
                            <p>Fitness Routine: {quest.routine}</p>
                            <button onClick={() => completeQuest(index)}>Mark as Completed</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No active quests. Accept a quest from the Quest Manager!</p>
            )}
        </div>
    );
};

export default QuestLog;
