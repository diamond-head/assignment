import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";
import History from "./pages/History";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Navigation />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
