// Initialize ChatGPT API client with your API key
const openaiApiKey = 'your_openai_api_key';
const openaiEndpoint = 'https://api.openai.com/v1/engines/text-davinci-002/completions';

// Function to send a message to ChatGPT and get a response
async function sendMessageToChatGPT(message) {
    const response = await fetch(openaiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
            prompt: `User: ${message}\nAI:`,
            max_tokens: 100
        })
    });
    const data = await response.json();
    return data.choices[0].text.trim();
}

// Function to handle new user welcome and guidance
function handleNewUserWelcome() {
    const welcomeMessage = "Welcome to our chatroom! How can I assist you today?";
    sendMessageToChatGPT(welcomeMessage)
        .then(response => {
            // Display the AI's response in the chat interface
            displayMessage(response);
        })
        .catch(error => {
            console.error('Error sending message to ChatGPT:', error);
        });
}

// Example usage: Call handleNewUserWelcome() when a new user joins the chat
handleNewUserWelcome();
