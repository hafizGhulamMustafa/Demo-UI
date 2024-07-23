import { Fragment } from "react";
import { Outlet } from "react-router";
import LayoutHeader from "./LayoutComponents/LayoutHeader";
import { Box } from "@mui/material";

// --------------------------------------------
const FullLayout = ({ children }) => {
  return (
    <Fragment>
      <LayoutHeader />
      <Box sx={{ minHeight: `calc(100vh - 124px)` }}>
        {children || <Outlet />}
      </Box>
    </Fragment>
  );
};

export default FullLayout;
