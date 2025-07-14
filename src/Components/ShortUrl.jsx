// src/components/ShortURLItem.jsx
import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Link
} from "@mui/material";

const ShortURLItem = ({ url }) => (
    <Card sx={{ mb: 2, boxShadow: 2, background: "#f9f9f9" }}>
        <CardContent>
            <Typography variant="body1">
                <strong>Original:</strong>{" "}
                <Link href={url.originalUrl} target="_blank" rel="noopener noreferrer">
                    {url.originalUrl}
                </Link>
            </Typography>

            <Typography variant="body1">
                <strong>Short:</strong>{" "}
                <Link href={url.shortUrl} target="_blank" rel="noopener noreferrer">
                    {url.shortUrl}
                </Link>
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
                ⏳ <strong>Expires in:</strong> {url.expiry} minutes
            </Typography>
        </CardContent>
    </Card>
);

export default ShortURLItem;
