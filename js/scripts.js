const texts = [
    "Fact: Official HyperOS unlocking is FREE via the Xiaomi Community app.",
    "Alert: Scammers use fake 'Authorized Account' screenshots to trick you.",
    "Tip: Never share your AnyDesk ID with strangers on Telegram.",
    "Stat: 99% of 'Paid Unlocks' on Telegram are scams.",
    "Reminder: If it sounds too good to be true, it is a scam."
];

const element = document.getElementById("facts");
let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeWriter() {
    const currentText = texts[textIndex];

    if (typing) {
        if (charIndex < currentText.length) {
            element.textContent += currentText.charAt(charIndex);
            charIndex++;
            // Randomize typing speed slightly for realism
            setTimeout(typeWriter, Math.random() * 50 + 30); 
        } else {
            typing = false;
            setTimeout(typeWriter, 3000); // Wait 3 sec before deleting
        }
    } else {
        if (charIndex > 0) {
            element.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeWriter, 20); // Delete faster
        } else {
            typing = true;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        }
    }
}

// Start the effect
typeWriter();