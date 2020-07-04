import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

import Crit from "./images/crit_1.gif";

const DICE_CONFIGS = [
  { sides: 4 },
  { sides: 6 },
  { sides: 8 },
  { sides: 10 },
  { sides: 12 },
  { sides: 20 },
];

const Roller = () => {
  const [sides, setSides] = useState(20);
  const [lastRoll, setLastRoll] = useState(null);

  return (
    <div>
      <h3>Welcome to Gorka Roll!</h3>
      {lastRoll === 20 && <img src={Crit} />}
      <Box display="flex">
        {DICE_CONFIGS.map((d) => (
          <Button
            key={d.sides}
            onClick={() => setSides(d.sides)}
            variant="outlined"
            color={sides === d.sides ? "secondary" : ""}
            m={"20px"}
          >
            {d.sides}
          </Button>
        ))}
      </Box>
      <Button
        disableElevation
        variant="contained"
        color="primary"
        onClick={() => setLastRoll(Math.floor(Math.random() * sides + 1))}
      >
        Roll!
      </Button>
      <div>Last Roll: {lastRoll}</div>
    </div>
  );
};

export default Roller;
