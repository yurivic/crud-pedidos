import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React from "react";

const TabPanel = ({ children, value, index, padding = "0px", ...rest }) => {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...rest}
    >
      <Box p={3} style={{ padding }}>
        {children}
      </Box>
    </Typography>
  );
};

export default TabPanel;
