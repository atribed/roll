import React from "react";
import { Box } from "@material-ui/core";

const Staging = ({ dice, removeDie }) => (
  <Box>
    Dice to be Rolled {dice.length > 0 ? " (click die to remove)" : ""}
    {!dice.length && (
      <Box fontSize="12px" style={{ color: "#404040" }} px={2} pt={1}>
        Select dice below to add them to group to be rolled.
      </Box>
    )}
    {dice.length > 0 && (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={dice.length > 2 ? "space-around" : "center"}
        mt={3}
      >
        {dice.map((d, i) => (
          <Box
            onClick={() => removeDie(i)}
            style={{ cursor: "pointer" }}
            ml={dice.length === 2 && i === 1 ? 4 : 0}
            minWidth="50px"
          >
            <Box textAlign="center">
              <img src={d.icon} height="24px" />
            </Box>
            <Box textAlign="center" style={{ textTransform: "uppercase" }}>
              {d.label}
            </Box>
          </Box>
        ))}
      </Box>
    )}
  </Box>
);

export default Staging;
