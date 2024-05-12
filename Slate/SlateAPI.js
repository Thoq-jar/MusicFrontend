console.clear();
console.log("[Slate] → Getting ready...")
console.log("[Slate] → Connecting...")
console.log("[Slate] → Getting Slate API...")

function checkSlateAPI() {
    setInterval(() => {
        fetch('/')
            .then(response => {
                if (response.ok) {} else {
                    console.error('[Slate] → Failed to connect!');
                }
            })
            .catch(error => {
                console.error('[Slate] → Error occurred while connecting:', error);
                console.log("[Slate] → Connection lost, reconnecting...");
            });
    }, 1000);
}

function connectSlateAPI() {
    fetch('/')
        .then(response => {
            if (response.ok) {
                console.log('[Slate] → Connected!');
            } else {
                console.error('[Slate] → Failed to connect!');
            }
        })
        .catch(error => {
            console.error('[Slate] → Error occurred while connecting:', error);
            console.log("[Slate] → Connection lost, reconnecting...");
        });
}

window.onload = checkSlateAPI;
window.onload = connectSlateAPI;