import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./styles.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    // Fallback in case user context is not loaded properly
    if (!user) {
        return <div>Loading...</div>;
    }

    const hp = 100; // Example HP value (out of 100)
    const mp = 100; // Example MP value (out of 100)

    return (
        <div className="dashboard">
            <div className="profile-header">
                <img
                    src={user.profilePicture || "https://via.placeholder.com/100"}
                    alt="Profile"
                    className="profile-picture"
                />
                <h2>{user.displayName || "Adventurer"}</h2>
            </div>

            <div className="stats">
                <div className="stat">
                    <label>HP</label>
                    <div className="health-bar">
                        <div
                            className="health-bar-fill"
                            style={{ width: `${hp}%` }}
                        ></div>
                    </div>
                </div>
                <div className="stat">
                    <label>MP</label>
                    <div className="mana-bar">
                        <div
                            className="mana-bar-fill"
                            style={{ width: `${mp}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="menu">
                <button onClick={() => navigate("/quest-manager")}>Quest Manager</button>
                <button onClick={() => navigate("/quest-log")}>Quest Log</button>
                <button onClick={() => navigate("/inventory")}>Inventory</button>
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button onClick={() => navigate("/settings")}>Settings</button>
                <button className="logout-button" onClick={() => navigate("/")}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
