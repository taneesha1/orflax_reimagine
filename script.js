const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const clearButton = document.getElementById("clear-button");

const responses = {
    "hello" : ["Hi there! How can I help you today?", "Hello! What can I do for you?", "Hey! How's it going?"],
    "hii": ["heyyyyyyy!"],
    "i love you":["i love u to!!"],
    "how are you?": ["I'm just a bot, but thanks for asking!", "Doing great! What about you?", "I'm here to help!"],
    "bye": ["Goodbye! Have a great day!", "See you later!", "Take care!"],
    "help": ["You can ask me anything!", "I'm here to assist you.", "Just type your question."],
    "default": ["I'm not sure how to respond to that. Can you ask something else?"]
};

function addMessage(content, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = content;
    messageDiv.className = sender === 'user' ? 'user-message message' : 'bot-message message';
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();
    if (responses[userMessage]) {
        const randomIndex = Math.floor(Math.random() * responses[userMessage].length);
        return responses[userMessage][randomIndex];
    }
    return responses["default"][0];
}

sendButton.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        const botResponse = getBotResponse(userMessage);
        addMessage(botResponse, 'bot');
        userInput.value = ""; // Clear input field
    }
});

userInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        sendButton.click(); // Simulate button click on Enter
    }
});

const messageContainer = document.createElement("div");
messageContainer.classList.add("message-container");
chatBox.insertBefore(messageContainer,chatBox.querySelector('.input-container'));
// Clear chat history
clearButton.addEventListener("click", () => {
    chatBox.innerHTML = ""; // Clear chat box
});
