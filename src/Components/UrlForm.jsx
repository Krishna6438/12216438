// src/components/URLForm.jsx
import React, { useState } from "react";
import { logEvent } from "/Middleware/Logging.jsx";

import {
    TextField,
    Button,
    Paper,
    Box,
    Typography
} from "@mui/material";

const URLForm = ({ setShortenedURLs }) => {
    const [url, setUrl] = useState("");
    const [validity, setValidity] = useState(30);
    const [shortcode, setShortcode] = useState("");

    const isValidURL = (str) => {
        try {
            new URL(str);
            return true;
        } catch {
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidURL(url)) {
            await logEvent("frontend", "error", "api", "Invalid URL");
            return alert("Invalid URL");
        }

        try {
            const shortened = {
                originalUrl: url,
                shortUrl: `http://localhost:3000/${shortcode || Math.random().toString(36).substring(7)}`,
                expiry: validity
            };

            setShortenedURLs((prev) => [...prev, shortened]);

            await logEvent("frontend", "info", "api", "URL shortened successfully");
        } catch (error) {
            await logEvent("frontend", "fatal", "api", "Shortening failed");
            alert("Error shortening URL", error);
        }
    };

    return (
        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
                🔗 Shorten a New URL
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2
                }}
            >
                <TextField
                    label="Original URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Original URL"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    label="Validity (minutes)"
                    type="number"
                    value={validity}
                    onChange={(e) => setValidity(e.target.value)}
                    placeholder="Validity (minutes)"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    label="Custom shortcode (optional)"
                    value={shortcode}
                    onChange={(e) => setShortcode(e.target.value)}
                    placeholder="Custom shortcode (optional)"
                    variant="outlined"
                    fullWidth
                />

                <Button variant="contained" color="primary" type="submit">
                    Shorten
                </Button>
            </Box>
        </Paper>
    );
};

export default URLForm;
