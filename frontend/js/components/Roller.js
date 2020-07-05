import React, { useState } from "react";
import Shake from "shake.js";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import Crit from "./images/crit_1.gif";
import Logo from "./images/logo_600.png";
import D4Icon from "./images/d4_48.png";
import D6Icon from "./images/d6_48.png";
import D8Icon from "./images/d8_48.png";
import D10Icon from "./images/d10_48.png";
import D12Icon from "./images/d12_48.png";
import D20Icon from "./images/d20_48.png";

const DICE_CONFIGS = [
  { sides: 4, icon: D4Icon },
  { sides: 6, icon: D6Icon },
  { sides: 8, icon: D8Icon },
  { sides: 10, icon: D10Icon },
  { sides: 12, icon: D12Icon },
  { sides: 20, icon: D20Icon },
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
      <img src={Logo} width={"100%"} />
      {lastRoll === 20 && <img src={Crit} width={"100%"} />}
      <Box textAlign="center" fontSize={"70px"}>
        {lastRoll}
      </Box>
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
        flex="1 1 0px"
      >
        {DICE_CONFIGS.map((d) => (
          <Box key={d.sides} mb={"10px"} width="95px">
            <Button
              onClick={() => setSides(d.sides)}
              variant="outlined"
              m={"20px"}
              fullWidth
            >
              <Box display="flex" alignItems="center">
                <Box mr={"10px"}>
                  <img src={d.icon} height={"36px"} />
                </Box>
                {d.sides}
              </Box>
            </Button>
          </Box>
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
