// Fixed substitution key (Original -> Substitution)
const customKey = [
    ["a", "x"], ["b", "y"], ["c", "z"], ["d", "w"], ["e", "v"], ["f", "u"], ["g", "t"], ["h", "s"], ["i", "r"],
    ["j", "q"], ["k", "p"], ["l", "o"], ["m", "n"], ["n", "m"], ["o", "l"], ["p", "k"], ["q", "j"], ["r", "i"],
    ["s", "h"], ["t", "g"], ["u", "f"], ["v", "e"], ["w", "d"], ["x", "c"], ["y", "b"], ["z", "a"]
];

// Function to encrypt text based on custom key
function encryptWithCustomKey(text, keyArray) {
    let encryptedArray = [];
    const keyMap = Object.fromEntries(keyArray); // Convert keyArray to an object for quick lookup
    for (let char of text) {
        if (/[a-z]/.test(char)) {
            encryptedArray.push(keyMap[char]);
        } else if (/[A-Z]/.test(char)) {
            encryptedArray.push(keyMap[char.toLowerCase()].toUpperCase());
        } else {
            encryptedArray.push(char); // Non-alphabet characters stay the same
        }
    }
    return encryptedArray.join(''); // Convert array back to string
}

// Function to decrypt text based on custom key
function decryptWithCustomKey(encryptedText, keyArray) {
    let reverseKeyMap = {};
    for (let [original, substituted] of keyArray) {
        reverseKeyMap[substituted] = original;
    }

    let decryptedArray = [];
    for (let char of encryptedText) {
        if (/[a-z]/.test(char)) {
            decryptedArray.push(reverseKeyMap[char]);
        } else if (/[A-Z]/.test(char)) {
            decryptedArray.push(reverseKeyMap[char.toLowerCase()].toUpperCase());
        } else {
            decryptedArray.push(char); // Non-alphabet characters stay the same
        }
    }
    return decryptedArray.join(''); // Convert array back to string
}

// Function to handle encryption on button click
function encryptText() {
    const plaintext = document.getElementById("plaintext").value;
    const encryptedText = encryptWithCustomKey(plaintext, customKey);
    // Display the encrypted text
    document.getElementById("encryptedText").textContent = encryptedText;
    // Automatically set the encrypted text to the decryption input field
    document.getElementById("encryptedInput").value = encryptedText;
}

// Function to handle decryption on button click
function decryptText() {
    const encryptedText = document.getElementById("encryptedInput").value;
    const decryptedText = decryptWithCustomKey(encryptedText, customKey);
    // Display the decrypted text
    document.getElementById("decryptedText").textContent = decryptedText;
}


console.log("Custom Key (Original -> Substitution):", customKey);
console.log("Original Text Array:", text.split(''));
console.log("Encrypted Array:", encryptedArray);
console.log("Decrypted Array:", decryptedArray);
