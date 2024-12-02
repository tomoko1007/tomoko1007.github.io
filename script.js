document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.textContent = 'クリックしてサプライズ！';
    button.onclick = function() {
        alert('こんにちは！猫の世界へようこそ！');
    };
    document.body.appendChild(button);
});
