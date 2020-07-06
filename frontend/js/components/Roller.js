import React, { useState } from "react";
import { Box, Button, Container } from "@material-ui/core";

import Logo from "../images/logo_600.png";

import { enableShake, roll } from "../utils";

import DiceSelect from "./DiceSelect";
import Results from "./Results";
import Staging from "./Staging";
import Footer from "./Footer";

const Roller = () => {
  const [selectedDice, setSelectedDice] = useState([]);
  const [results, setResults] = useState([]);
  const [shakeEnabled, setShakeEnabled] = useState(false);

  // TODO: Implement a better to handle the memory leak
  if (shakeEnabled) {
    if (window.lastCalled) {
      window.removeEventListener("shake", window.lastCalled);
    }

    window.lastCalled = () => setResults(roll(selectedDice));

    window.addEventListener("shake", window.lastCalled, false);
  }

  return (
    <Container maxWidth="sm">
      <img src={Logo} width="100%" />
      <Box mt={3} borderBottom="3px" borderColor="primary">
        <Staging
          dice={selectedDice}
          removeDie={(index) =>
            setSelectedDice(selectedDice.filter((_, i) => i !== index))
          }
        />
      </Box>
      <Box mt={3} borderBottom="3px" borderColor="primary">
        <Results dice={results} />
      </Box>
      <Box mt={3}>
        <DiceSelect onDieClick={(d) => setSelectedDice([...selectedDice, d])} />
      </Box>
      <Box mt={3}>
        <Button
          disableElevation
          variant="contained"
          color="primary"
          onClick={() => setResults(roll(selectedDice))}
          disabled={selectedDice.length === 0}
          fullWidth
        >
          Roll selected {selectedDice.length > 1 ? "dice" : "die"}
        </Button>
      </Box>
      <Box mt={2}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => setSelectedDice([])}
          disabled={selectedDice.length === 0}
        >
          Reset selected {selectedDice.length > 1 ? "dice" : "die"}
        </Button>
      </Box>
      <Box mt={2}>
        <Button
          disabled={shakeEnabled}
          fullWidth
          variant="outlined"
          onClick={() =>
            enableShake(() => {
              setShakeEnabled(true);
            })
          }
        >
          {shakeEnabled ? "Shake Enabled" : "Enable Shake to Roll"}
        </Button>
      </Box>
      <Footer />
    </Container>
  );
};

export default Roller;
