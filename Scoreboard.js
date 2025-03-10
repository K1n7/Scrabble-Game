import React from "react";
import { useGame } from "../context/GameContext";

const Scoreboard = () => {
    const { score } = useGame();

    return (
        <div style={{ fontSize: "20px", marginTop: "10px" }}>
            <strong>Score:</strong> {score}
        </div>
    );
};

export default Scoreboard;
