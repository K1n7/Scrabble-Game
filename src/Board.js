import React from "react";
import Tile from "./Tile";
import { useGame } from "../context/GameContext";

const Board = () => {
    const { board } = useGame();

    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(15, 40px)" }}>
            {board.map((row, rowIndex) =>
                row.map((letter, colIndex) => (
                    <Tile key={${rowIndex}-${colIndex}} letter={letter} />
                ))
            )}
        </div>
    );
};

export default Board;
