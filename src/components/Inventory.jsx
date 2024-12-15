import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./styles.css";

const Inventory = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="inventory">
            <h1>Inventory</h1>
            {user.inventory.length > 0 ? (
                <ul>
                    {user.inventory.map((item, index) => (
                        <li key={index} className="inventory-item">
                            <p>{item.name} ({item.rarity})</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your inventory is empty. Complete quests to earn items!</p>
            )}
        </div>
    );
};

export default Inventory;
