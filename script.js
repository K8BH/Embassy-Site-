const modal = document.getElementById('item-modal');
const closeBtn = document.getElementById('close-modal');
const nextBtn = document.getElementById('next-info-btn');
const infoBox = document.getElementById('item-info');
const modalImg = document.getElementById('modal-img');
const stickers = document.querySelectorAll('.sticker');

const itemData = {
    blahaj: {
        src: "shark(blahaj).png",
        facts: [
    "name: blahaj",
    "role: emotional Support",
    "skill: fixes off one b one error :3",
    "status: currently bored"
]
},

passport: {
    src: "passport.png",
    facts: [
        "item: hackclub passport",
        "purpose: collecting stamps",
        "perk: unlocks Coolness",
        "status: ready to ship"
    ]
},
yubikey: {
    src: "YubiKey.png",
    facts: [
        "item: yubikey",
        "type:hardware security ",
        "skill: keeps the hackers away <3",
        "status: locked in"
    ]

},

watch: {
    src: "watch.png",
    facts: [
        "item: casio f-91 (actually a watch grant)",
        "type: legendary timepiece",
        "skill: tracks ur time ",
        "status:ticking"
    ]
},
};

let currentFacts = [];
let currentFactIndex = 0;

stickers.forEach(sticker => {
    sticker.addEventListener('click', () => {
        const itemKey = sticker.getAttribute('data-item');
        const data= itemData[itemKey];

        modalImg.src = data.src;
        currentFacts = data.facts;
        currentFactIndex = 0;

        infoBox.innerText = currentFacts[currentFactIndex];
        modal.showModal();
    });
    
});

closeBtn.addEventListener('click', () => {
    modal.close();
});

nextBtn.addEventListener('click', () => {
    currentFactIndex++;
    if (currentFactIndex >= currentFacts.length) {
        currentFactIndex = 0;
    }
    infoBox.innerText = currentFacts[currentFactIndex];
});

const loadingScreen = document.getElementById('loading-screen');
const skipBtn = document.getElementById('skip-btn');

skipBtn.addEventListener('click', () => {
    loadingScreen.classList.add('hidden');
});


setTimeout(() => {
    loadingScreen.classList.add('hidden');

}, 3000);