import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser ] = useState({
    displayName: "Adventurer",
    profilePicture: "https://via.placeholder.com/100",
    hp: 100, // Initial HP
    mp: 100, // Initial MP
  });

  const updateUser = (newUser) => {
    setUser((prevUser) => ({ ...prevUser, ...newUser }));
  };

  // Function to reduce HP and MP
  const reduceStats = () => {
    setUser((prevUser) => ({
      ...prevUser,
      hp: Math.max(0, prevUser.hp - Math.floor(Math.random() * 5)), // Reduce HP by a random value (0-5)
      mp: Math.max(0, prevUser.mp - Math.floor(Math.random() * 5)), // Reduce MP by a random value (0-5)
    }));
  };

  const [acceptedQuests, setAcceptedQuests] = useState([]);

  const addQuest = (quest) => {
    setAcceptedQuests((prevQuests) => [...prevQuests, quest]);
  };

  const completeQuest = (index) => {
    setAcceptedQuests((prevQuests) => prevQuests.filter((_, i) => i !== index));
  };


  return (
    <UserContext.Provider value={{ user, updateUser, reduceStats, acceptedQuests, addQuest, completeQuest }}>
    {children}
  </UserContext.Provider>
  );
};