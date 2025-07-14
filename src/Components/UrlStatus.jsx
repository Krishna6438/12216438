// src/components/URLStats.jsx
import React from "react";
import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    Divider,
    Box
} from "@mui/material";

// ✅ MOCK DATA directly here
const mockUrls = [
    {
        shortUrl: "http://localhost:3000/abc123",
        originalUrl: "https://www.google.com",
        createdAt: "2025-07-14T09:00:00Z",
        expiresAt: "2025-07-14T10:00:00Z",
        clickCount: 12,
        shortcode: "abc123",
        logs: [
            {
                timestamp: "2025-07-14T09:10:00Z",
                browser: "Chrome",
                location: "Delhi, India"
            },
            {
                timestamp: "2025-07-14T09:25:00Z",
                browser: "Firefox",
                location: "Mumbai, India"
            }
        ]
    },
    {
        shortUrl: "http://localhost:3000/xyz789",
        originalUrl: "https://www.wikipedia.org",
        createdAt: "2025-07-13T11:00:00Z",
        expiresAt: "2025-07-13T12:00:00Z",
        clickCount: 5,
        shortcode: "xyz789",
        logs: [
            {
                timestamp: "2025-07-13T11:15:00Z",
                browser: "Safari",
                location: "Bangalore, India"
            }
        ]
    }
];

const URLStats = () => {
    const urls = mockUrls;

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                📊 Short URL Statistics
            </Typography>

            {urls.length === 0 ? (
                <Typography>No shortened URLs found.</Typography>
            ) : (
                urls.map((item, index) => (
                    <Card key={index} sx={{ mb: 3, boxShadow: 2 }}>
                        <CardContent>
                            <Typography variant="body1">
                                <strong>Original URL:</strong>{" "}
                                <a href={item.originalUrl} target="_blank" rel="noopener noreferrer">
                                    {item.originalUrl}
                                </a>
                            </Typography>

                            <Typography variant="body1">
                                <strong>Short URL:</strong>{" "}
                                <a href={item.shortUrl} target="_blank" rel="noopener noreferrer">
                                    {item.shortUrl}
                                </a>
                            </Typography>

                            <Typography variant="body2" sx={{ mt: 1 }}>
                                📅 Created At: {new Date(item.createdAt).toLocaleString()}
                            </Typography>

                            <Typography variant="body2">
                                ⏳ Expires At: {new Date(item.expiresAt).toLocaleString()}
                            </Typography>

                            <Typography variant="body2" sx={{ mb: 1 }}>
                                🔢 Clicks: {item.clickCount}
                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="subtitle1">Click Logs:</Typography>
                            {item.logs && item.logs.length > 0 ? (
                                <List dense>
                                    {item.logs.map((log, i) => (
                                        <ListItem key={i} disablePadding>
                                            🕒 {new Date(log.timestamp).toLocaleString()} | 🌐 {log.browser} | 📍 {log.location}
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <Typography variant="body2">No click logs available.</Typography>
                            )}
                        </CardContent>
                    </Card>
                ))
            )}
        </Box>
    );
};

export default URLStats;
