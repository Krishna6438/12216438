// src/pages/Home.jsx
import React, { useState } from "react";
import URLForm from "../Components/UrlForm.jsx";
import ShortURLItem from "../Components/ShortUrl.jsx";

const Home = () => {
    const [shortenedURLs, setShortenedURLs] = useState([]);

    return (
        <div>
            <h2>URL Shortener</h2>
            <URLForm setShortenedURLs={setShortenedURLs} />
            {shortenedURLs.map((url, index) => (
                <ShortURLItem key={index} url={url} />
            ))}
        </div>
    );
};

export default Home;
