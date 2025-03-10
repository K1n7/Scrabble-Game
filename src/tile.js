import React from "react";

const Tile = ({ letter }) => {
    return (
        <div style={{
            width: 40, height: 40, border: "1px solid black",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "20px", fontWeight: "bold", backgroundColor: "#f8d210"
        }}>
            {letter}
        </div>
    );
};

export default Tile;
