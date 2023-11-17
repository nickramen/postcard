function displayChat(chatId) {
    // Hide all chat contents
    var allChats = document.querySelectorAll('.chat-content');
    allChats.forEach(function(chat) {
        chat.style.display = 'none';
    });

    // Show the selected chat content
    var selectedChat = document.getElementById('chat' + chatId);
    if (selectedChat) {
        selectedChat.style.display = 'block';
        // You might also want to scroll to the bottom of the chat here
        selectedChat.scrollTop = selectedChat.scrollHeight;
    }
}
