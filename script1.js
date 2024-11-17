function generateKey() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let shuffled = alphabet.split('').sort(() => Math.random() - 0.5).join('');
    let key = {};
    for (let i = 0; i < alphabet.length; i++) {
        key[alphabet[i]] = shuffled[i];
    }
    return key;
}

function encrypt(text, key) {
    let encryptedText = "";
    for (let char of text) {
        if (/[a-z]/.test(char)) {
            encryptedText += key[char];
        } else if (/[A-Z]/.test(char)) {
            encryptedText += key[char.toLowerCase()].toUpperCase();
        } else {
            encryptedText += char; // Non-alphabet characters stay the same
        }
    }
    return encryptedText;
}

function decrypt(encryptedText, key) {
    let reverseKey = {};
    for (let k in key) {
        reverseKey[key[k]] = k;
    }

    let decryptedText = "";
    for (let char of encryptedText) {
        if (/[a-z]/.test(char)) {
            decryptedText += reverseKey[char];
        } else if (/[A-Z]/.test(char)) {
            decryptedText += reverseKey[char.toLowerCase()].toUpperCase();
        } else {
            decryptedText += char; // Non-alphabet characters stay the same
        }
    }
    return decryptedText;
}

function encryptText() {
    const plaintext = document.getElementById("plaintext").value;
    const key = generateKey();
    const encrypted = encrypt(plaintext, key);
    const decrypted = decrypt(encrypted, key);

    // Display the results
    document.getElementById("key").textContent = JSON.stringify(key);
    document.getElementById("encryptedText").textContent = encrypted;
    document.getElementById("decryptedText").textContent = decrypted;
}
