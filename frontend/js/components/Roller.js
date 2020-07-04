import React, { useState } from "react";
import Shake from "shake.js";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

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

  const shakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000, // optional, determines the frequency of event generation
  });

  shakeEvent.start();

  const roll = () => {
    setLastRoll(Math.floor(Math.random() * sides + 1));
  };

  return (
    <Container maxWidth={"sm"}>
      <h2>Welcome to Roll!</h2>
      {lastRoll === 20 && <img src={Crit} />}
      <Box textAlign="center" fontSize={"70px"}>
        {lastRoll}
      </Box>
      <Box display="flex" justifyContent="space-between">
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
      <Box mt={"20px"}>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          onClick={() => setLastRoll(Math.floor(Math.random() * sides + 1))}
          fullWidth
        >
          Roll the d{sides}
        </Button>
      </Box>
      <Box mt={"20px"}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => {
            if (typeof DeviceMotionEvent.requestPermission === "function") {
              DeviceMotionEvent.requestPermission()
                .then((permissionState) => {
                  if (permissionState === "granted") {
                    window.addEventListener("shake", roll, false);
                  }
                })
                .catch(console.error);
            } else {
              window.addEventListener("shake", roll, false);
            }
          }}
        >
          Enable Shake to Roll
        </Button>
      </Box>
    </Container>
  );
};

export default Roller;
