import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Sidebar from "../components/Drawer/Sidebar";
import Topbar from "../components/Appbar/Topbar";
function Layout() {
  const defaultTheme = createTheme();

  return (
    <div className="d-flex">
      <div className="flex-grow-2">
        <Sidebar />
      </div>
      <div className="flex-grow-10">
        <div className="d-flex flex-column">
          <div>
            <Topbar />
            sdgklsjdgkjl
          </div>
        </div>
      </div>
    </div>
  );
};


export default Layout;
