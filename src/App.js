import React, { useState } from "react";
import NewsFeed from "./components/NewsFeed";
import SideBar from "./components/SideBar";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBar";
import { Box, Stack } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material";
import AddPost from "./components/AddPost";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode} mode={mode} />
          <NewsFeed />
          <RightBar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
