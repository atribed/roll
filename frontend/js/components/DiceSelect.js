import React from "react";
import { Box, Button } from "@material-ui/core";

import { DICE_CONFIGS } from "../constants";

const DiceSelect = ({ onDieClick }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    flexWrap="wrap"
    flex="1 1 0px"
  >
    {DICE_CONFIGS.map((d) => (
      <Box key={d.sides} mb={2} width="95px">
        <Button
          onClick={() => onDieClick(d)}
          variant="outlined"
          m={3}
          fullWidth
        >
          <Box display="flex" alignItems="center">
            <Box mr={2}>
              <img src={d.icon} height="36px" />
            </Box>
            {d.label}
          </Box>
        </Button>
      </Box>
    ))}
  </Box>
);

export default DiceSelect;
