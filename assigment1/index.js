

//Open Git hub repo link
document.getElementsByClassName("git-link")[0].addEventListener('click', opneLink);

function opneLink() {
    return window.open("https://github.com/MedinaDemirova?tab=repositories");
}

//Change testimonials by click
let texts = {
    1: { name: "Jonh Doe", text: "Quis, excepturi alias ab amet ullam numquam enim dolor placeat ad a soluta ab ametullam alias mquam enim ab amet ulla alias a ab,excepturi" },
    2: { name: "Jo Doe", text: "Lorem alias ab amet ullam numquam enimipsum dolor, sit amet landitiis alias ab amet ullam numquam enim saepe amet officii." },
    3: { name: "Jane Doe", text: "Quis, excepturi alias alias ab amet ullam numquam enim ab amet ulla alias ab amet ullam numquam enimm numquam enim dolor placeat ad a solalias amet ullam!" }
};

let btns = document.getElementsByClassName("btn-span");
let textElement = document.getElementsByClassName("active-text")[0];
let nameElement = document.getElementsByClassName("active-name")[0];

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", changeSlide)
}


function changeSlide(e, activeID) {
    let current = Number(e.target.id) || activeID;
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active")
    }
    e.target.classList.add("active");
    textElement.textContent = texts[current].text;
    nameElement.textContent = texts[current].name;
}

//Set interval to change slide
setInterval(() => {
    let activeElement = document.getElementsByClassName("active")[0];
    let next = Number(activeElement.id) + 1;
    if (next > 3) next = 1;
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active")
    }

    document.getElementById(next).classList.add("active");
    textElement.textContent = texts[next].text;
    nameElement.textContent = texts[next].name;

}, 5000);


