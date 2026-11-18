function checkMessage() {

    let message = document.getElementById("message").value.toLowerCase();

    if (message.trim() === "") {
    result.innerHTML = "<p>Please enter a message first.</p>";
    return;
}

    let warnings = [];

    if (message.includes("otp")) {
        warnings.push("Never share your OTP with anyone.");
    }

    if (message.includes("urgent") || message.includes("immediately")) {
        warnings.push("Urgent language may be used to pressure you.");
    }

    if (message.includes("prize") || message.includes("lottery")) {
        warnings.push("Unexpected prize or lottery claims can be suspicious.");
    }

    if (message.includes("click") || message.includes("link")) {
        warnings.push("Be careful with unknown links.");
    }

    if (message.includes("payment") || message.includes("transfer")) {
        warnings.push("Verify payment requests independently.");
    }

    if (warnings.length > 0) {

        result.innerHTML = "<h3>Warning Signs Found</h3>";

        warnings.forEach(function(warning) {
            result.innerHTML += "<p>⚠️ " + warning + "</p>";
        });

    } else {

        result.innerHTML = "<h3>No Listed Warning Signs Found</h3><p>This does not prove the message is safe. Always verify the sender.</p>";

    }
}