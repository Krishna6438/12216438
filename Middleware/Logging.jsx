
export const logEvent = async (stack, level, pkg, message) => {
    const payload = { stack, level, package: pkg, message };

    try {
        const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json();
        console.log("Log Result:", result);
    } catch (error) {
        console.error("Logging Failed:", error);
    }
};
