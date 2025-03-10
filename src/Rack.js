import React from "react";
import { useGame } from "../context/GameContext";

const Rack = () => {
    const { rack } = useGame();

    return (
        <div style={{ display: "flex", marginTop: "20px" }}>
            {rack.map((letter, index) => (
                <div key={index} style={{
                    width: 40, height: 40, border: "1px solid black",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", fontWeight: "bold", backgroundColor: "#d4e157",
                    marginRight: "5px"
                }}>
                    {letter}
                </div>
            ))}
        </div>
    );
};

export default Rack;
