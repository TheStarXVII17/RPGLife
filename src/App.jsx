import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginRegister";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import QuestManager from "./components/QuestManager";
import QuestLog from "./components/QuestLog";
import Inventory from "./components/Inventory"
import { UserProvider } from "./components/UserContext";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/quest-manager" element={<QuestManager />} />
                <Route path="/quest-log" element={<QuestLog />} />
                <Route path="/inventory" element={<Inventory />} />
            </Routes>
        </Router>
    );
}

export default App;
