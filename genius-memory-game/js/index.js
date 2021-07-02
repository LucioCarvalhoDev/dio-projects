const activeButton = (() => {
    const audios = {};

    return (e) => {
        // Adapta caso a chamada venha de evento
        // ou função
        const elem = e.target ? e.target : e;
        const name = elem.dataset.audio;
        elem.classList.add('active');
        if (audios[name] === undefined) {
            audios[name] = new Audio(`./../assets/sounds/${name}.mp3`);
            audios[name].onended = () => elem.classList.remove('active');
        }
        audios[name].pause();
        audios[name].currentTime = 0;
        audios[name].play();
    };

})();

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
red.onclick = activeButton;
green.onclick = activeButton;
blue.onclick = activeButton;
yellow.onclick = activeButton;

const BUTTONS = [red, green, blue, yellow];

const start = document.getElementById("start");

function playAll(list) {
    if (list === undefined)
        list = BUTTONS.pick(5);
    if (list.length === 0) return;

    const elem = list.splice(0, 1)[0];
    activeButton(elem);

    setTimeout(() => {
        return playAll(list);
    }, 1000);
}

start.addEventListener('click', () => {
    playAll();
});