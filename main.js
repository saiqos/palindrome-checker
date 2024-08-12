const input = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const displayResult = document.querySelector('#result');
const form = document.getElementById('form');

function palindromeCheck(input) {
    if (input.length == 0) {
        alert("Please input a value");
        return;
    }
    const clearInput = input.replace(/[^A-Za-zа-я0-9]/gi, '').toLowerCase();
    const reversedClearInput = clearInput.split('').reverse().join('');
    result.innerHTML = `<strong>${input}</strong> ${clearInput === reversedClearInput ? 'is' : 'is not'} a palindrome`;
}

checkBtn.addEventListener('click', () => {
    palindromeCheck(input.value);
    input.value = '';
});

input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(input.value);
        input.value = '';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
})