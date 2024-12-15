import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import UserContext
import "./styles.css";

const Profile = () => {
    const navigate = useNavigate();
    const { user, updateUser  } = useContext(UserContext); // Use UserContext

    const [displayName, setDisplayName] = useState(user.displayName);
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);

    const handleProfilePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        updateUser ({ displayName, profilePicture }); // Update user context
        navigate("/dashboard");
    };

    return (
        <div className="profile-page">
            <h1>Edit Profile</h1>
            <form>
                <div className="form-group">
                    <label>Display Name</label>
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePictureChange}
                    />
                    {profilePicture && (
                        <img
                            src={profilePicture}
                            alt="Profile Preview"
                            className="profile-preview"
                        />
                    )}
                </div>
                <button
                    type="button"
                    onClick={handleSave} // Call handleSave on button click
                    className="save-button"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default Profile;