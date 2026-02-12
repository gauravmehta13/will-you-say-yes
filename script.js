const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

let yesScale = 1;
let missCount = 0;

// Messages that appear on the Yes button as it grows
const yesMessages = [
    "Yes",
    "Are you sure?",
    "Pleease??",
    "Don't be mean!",
    "I'm getting big...",
    "CLICK ME ALREADY!"
];

// Messages for the No button as it runs away
const noMessages = [
    "No",
    "Wait!",
    "Missed!",
    "Rude!",
    "Try again!",
    "Nope!"
];

function moveNoButton() {
    // Make the button float away
    noBtn.classList.add('floating');
    
    // 1. Move the No button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Grow the Yes button
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;

    // 3. Update texts based on missCount
    missCount++;

    // Update Yes button text (cycles through the messages)
    if (missCount < yesMessages.length) {
        yesBtn.innerText = yesMessages[missCount];
    } else {
        yesBtn.innerText = "SAY YES!! ❤️";
    }

    // Update No button text randomly
    const randomNoIndex = Math.floor(Math.random() * noMessages.length);
    noBtn.innerText = noMessages[randomNoIndex];
}

// Desktop: mouseover event
noBtn.addEventListener('mouseover', moveNoButton);

// Mobile: touchstart event (before the tap registers)
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent the click from firing
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div class="container">
            <h1 style="font-size: 3rem;">Yay! I knew you'd cave! 🥰</h1>
            <img src="https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif" alt="Happy celebration">
        </div>
    `;
});
