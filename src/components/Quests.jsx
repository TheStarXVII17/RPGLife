import React, { useState } from "react";

const Quests = () => {
    const [currentQuest, setCurrentQuest] = useState(null);

    // Predefined list of fitness-related quests
    const questPool = [
        "Adventurer! We need you to travel to the *Shimmering Peaks* to deliver an urgent message. (Take 5,000 steps today)",
        "A potion master in the *Emerald Woods* is in need of rare herbs. Help them gather supplies. (Complete a 15-minute stretching routine)",
        "The *Crystal Caverns* have been overrun with shadows! Illuminate the area with your lantern. (Track your water intake for the day)",
        "A dragons roar has shaken the *Scarlet Highlands*. Prepare for the journey ahead! (Do 20 squats and 10 push-ups)",
        "The *River of Echoes* whispers secrets to those who listen. Find clarity and strength. (Complete a 15-minute guided meditation)",
        "Brave the *Frosted Wastes* to deliver a package to the ice forger. (Take 7,000 steps today)",
        "The *Golden Grove* is said to bloom only for the strong-hearted. Earn its favor. (Log your meals in a calorie tracking app)",
        "The *Ebon Fortress* calls for champions to guard its gates. Sharpen your skills! (Do 30 minutes of yoga)",
        "A rare artifact has been stolen from the *Moonlit Archives*. Recover it before the next full moon. (Complete a 10-minute core workout)",
        "The villagers of *Thistledown* are holding a feast. Help them prepare a healthy dish. (Try a new healthy recipe and log the ingredients)",
        "The *Crimson Marshes* are treacherous. Scout the area and report back. (Complete 10,000 steps today)",
        "The *Tower of Winds* challenges adventurers to test their endurance. Prove your worth. (Do a 20-minute run or jog)",
        "A healer in the *Amber Glade* seeks adventurers to help craft a restorative elixir. (Drink 8 glasses of water today)",
        "The *Sapphire Lagoon* has magical properties. Meditate by its shores to gain wisdom. (Complete a 20-minute mindfulness meditation)",
        "A storm brews over the *Obsidian Cliffs*. Prepare your gear and train for the journey. (Perform 15 burpees and 30 jumping jacks)",
        "The *Mystic Bazaar* needs supplies delivered before sundown. (Walk 3,000 steps before lunchtime)",
        "The *Forest of Whispers* has a hidden treasure. Use your map to find it. (Track your fitness goals using a health app today)",
        "The *Iron Barrens* call for strength and resilience. Fortify yourself! (Do a 15-minute strength training session)",
        "The *Skyspire* challenges you to ascend its dizzying heights. (Climb stairs or walk uphill for 10 minutes)",
        "The *Hollow Grove* is under attack by shadow beasts. Rally your energy and defend it! (Do a 10-minute cardio workout)",
    ];
    
    const places = [
        "Shimmering Peaks",
        "Emerald Woods",
        "Crystal Caverns",
        "Scarlet Highlands",
        "River of Echoes",
        "Frosted Wastes",
        "Golden Grove",
        "Ebon Fortress",
        "Moonlit Archives",
        "Thistledown",
        "Crimson Marshes",
        "Tower of Winds",
        "Amber Glade",
        "Sapphire Lagoon",
        "Obsidian Cliffs",
        "Mystic Bazaar",
        "Forest of Whispers",
        "Iron Barrens",
        "Skyspire",
        "Hollow Grove",
    ];
    

    // Function to generate a new quest
    const generateQuest = () => {
        const randomPlace = places[Math.floor(Math.random() * places.length)];
        const questTemplate = questPool[Math.floor(Math.random() * questPool.length)];
        const quest = questTemplate.replace("*insert random fantasy place name*", randomPlace);
        setCurrentQuest(quest);
    };

    return (
        <div className="quests-page">
            <h1>Quests</h1>
            <div className="quest-box">
                {currentQuest ? (
                    <p className="current-quest">{currentQuest}</p>
                ) : (
                    <p>No quest assigned yet. Click below to start!</p>
                )}
            </div>
            <button onClick={generateQuest} className="generate-quest-button">
                Get a New Quest
            </button>
        </div>
    );
};

export default Quests;
