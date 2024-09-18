document.querySelectorAll('.playBtn').forEach(button => {
    button.addEventListener('click', function() {
        const gameUrl = this.getAttribute('data-url');
        chrome.tabs.create({ url: gameUrl });
    });
});
