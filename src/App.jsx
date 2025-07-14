// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import URLStats from './Components/UrlStatus';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <AppBar position="static" color="primary" elevation={2}>
        <Container maxWidth="md">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              🔗 URL Shortener
            </Typography>
            <Box>
              <Button color="inherit" component={Link} to="/">
                Shortener
              </Button>
              <Button color="inherit" component={Link} to="/stats">
                Statistics
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stats" element={<URLStats />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
