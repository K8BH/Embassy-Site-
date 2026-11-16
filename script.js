const sharkBtn = document.getElementById('shark-btn');
const modal = document.getElementById('shark-modal');
const closeBtn = document.getElementById('close-modal');
const nextBtn = document.getElementById('next-info-btn');
const infoBox = document.getElementById('shark-info');

const sharkFacts = [
    "name: blahaj",
    "role: emotional Support",
    "skill: fixes off one b one error :3",
    "status: currently bored"
];

let currentFactIndex = 0;

sharkBtn.addEventListener('click', () => {
    currentFactIndex = 0;
    infoBox.innerText = sharkFacts[currentFactIndex];
    modal.showModal();
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

nextBtn.addEventListener('click', () => {
    currentFactIndex++;
    if (currentFactIndex >= sharkFacts.length) {
        currentFactIndex = 0;
    }
    infoBox.innerText = sharkFacts[currentFactIndex];
});