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

  const [acceptedQuests, setAcceptedQuests] = useState([]);

  const addQuest = (quest) => {
    setAcceptedQuests((prevQuests) => [...prevQuests, quest]);
  };

  const completeQuest = (index) => {
    setAcceptedQuests((prevQuests) => prevQuests.filter((_, i) => i !== index));
  };


  return (
    <UserContext.Provider value={{ user, updateUser, acceptedQuests, addQuest, completeQuest }}>
    {children}
  </UserContext.Provider>
  );
};