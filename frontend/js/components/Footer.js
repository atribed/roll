import React from "react";
import { Box, Link } from "@material-ui/core";

const Footer = () => (
  <Box textAlign="center" fontSize={"10px"} color="#606060" mt={6}>
    Created and maintained by{" "}
    <Link
      target="_blank"
      rel="noopener"
      rel="noreferrer"
      href="https://github.com/atribed/"
    >
      @atribed
    </Link>
    .
  </Box>
);

export default Footer;
