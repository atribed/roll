import React from "react";
import { Box } from "@material-ui/core";

const Results = ({ dice }) => {
  const totalRoll = dice.reduce(
    (acc, val) => (val.result ? acc + val.result : acc),
    0
  );

  return (
    <Box>
      {totalRoll ? (
        <Box>
          <Box textAlign="center" fontSize="70px">
            {totalRoll}
          </Box>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around">
            {dice.map(
              (d) =>
                d.result && (
                  <Box
                    display="flex"
                    alignItems="center"
                    key={d.sides}
                    minWidth="50px"
                  >
                    <img src={d.icon} height="24px" />
                    <Box fontSize="12px" ml={1} color="green">
                      {d.result}
                    </Box>
                  </Box>
                )
            )}
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default Results;
