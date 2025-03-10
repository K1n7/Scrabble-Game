import React from "React";
import { GameProvider } from " ./context/GameContext";
import Board from "./Components/Board";
import Rack from "./components/Rack";
import Scoreboard from "./Components/Scoreboard";
import Timer from "./Components/Timer";

const App = () => {
  return (
    <Gameprovider>
          <div style={{ textAlign: "center",
                      padding: "20px"}}>
                        <h1>Titans Scrabble Game Project</h1>  
                        <Timer/>
                        <Scoreboard/>
                        <Board/>
                        <Rack/>
          </div>
    </Gameprovider> 
   );
};
export default App;
