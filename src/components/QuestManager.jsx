import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import "./styles.css";

const QuestManager = () => {
    const { user, addQuest } = useContext(UserContext);
    const [currentQuest, setCurrentQuest] = useState(null);
    const [imagePath, setImagePath] = useState(""); // For custom image path
    const [customGreeting, setCustomGreeting] = useState(`What Quest would you like today, Adventurer?`);


    const questPool = [
        { description: "Adventurer! We need you to complete 50 push-ups to strengthen your body.", routine: "50 Push-ups" },
        { description: "Journey to the forest and complete a 30-minute yoga session.", routine: "30 minutes Yoga" },
        { description: "You must run a 5km course to retrieve an ancient scroll!", routine: "Run 5 km" },
        { description: "Help the villagers by doing a full-body workout to improve their health.", routine: "Full-body workout" },
        { description: "Defeat the challenges of the Iron Tower with 100 squats.", routine: "100 Squats" },
        { description: "The Wizard requires you to complete 30 minutes of cardio to maintain your magic energy.", routine: "30 minutes Cardio" },
        { description: "Battle the giants in the mountains by doing 50 burpees.", routine: "50 Burpees" },
        { description: "The town's fitness needs are urgent! Complete a 30-minute plank challenge.", routine: "30-minute Plank Challenge" },
        { description: "A test of endurance awaits you: 60 lunges for the warriors of the ancient realm.", routine: "60 Lunges" },
        { description: "Travel to the mystical lake for a 45-minute swimming session.", routine: "45-minute Swimming" },
    ];

     // Generate a random quest
     const generateQuest = () => {
        const randomQuest = questPool[Math.floor(Math.random() * questPool.length)];
        setCurrentQuest(randomQuest);
    };

    // Accept the current quest
    const acceptQuest = () => {
        if (currentQuest) {
            addQuest(currentQuest);
            setCurrentQuest(null); // Reset the current quest after acceptance
        }
    };

    // Reroll for a new quest
    const rerollQuest = () => {
        generateQuest(); // Generate a new random quest
    };

    return (
        <div className="quest-manager">
            <h1>{customGreeting}</h1>
            <div className="quest-manager-image">
                {/* Display custom image if the path is provided */}
                {imagePath && <img src={imagePath} alt="Quest Manager" />}
            </div>

            {currentQuest ? (
                <div className="current-quest">
                    <p>{currentQuest.description}</p>
                    <p>Fitness Routine: {currentQuest.routine}</p>
                    <button onClick={acceptQuest}>Accept Quest</button>
                    <button onClick={rerollQuest}>I'd like something else, Quest Manager</button>
                </div>
            ) : (
                <button onClick={generateQuest}>Generate Quest</button>
            )}
        </div>
    );
};

export default QuestManager;
