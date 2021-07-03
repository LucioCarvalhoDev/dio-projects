// // import { } from "../lib/luk.js";

// const activeButton = async (e) => {
//     return new Promise((resolve, reject) => {
//         // Adapta caso a chamada venha de evento
//         // ou função
//         const elem = e.target ? e.target : e;
//         const name = elem.dataset.audio;

//         const audio = new Audio(`./../assets/sounds/${name}.mp3`);
//         audio.addEventListener('ended', () => {
//             elem.classList.remove('active');
//             resolve('ok');
//         });

//         audio.pause();
//         audio.currentTime = 0;
//         elem.classList.add('active');
//         audio.play();
//     });
// };

// const red = document.getElementById("red");
// const green = document.getElementById("green");
// const blue = document.getElementById("blue");
// const yellow = document.getElementById("yellow");
// red.onclick = activeButton;
// green.onclick = activeButton;
// blue.onclick = activeButton;
// yellow.onclick = activeButton;

// const BUTTONS = [red, green, blue, yellow];

// const start = document.getElementById("start");

// function playAll(list) {
//     return new Promise((resolve, reject) => {
//         if (list == undefined)
//             list = BUTTONS.pick(4);
//         const promises = [];

//         list.forEach((elem, i) => {
//             promises.push(play(elem, 1000 * i));
//         });

//         // resolve({ promises, list });
//         Promise.all(promises)
//             .then(res => {
//                 resolve(list);
//             });

//     });

// };

// async function play(elem, t = 100) {
//     // activeButton(elem);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             activeButton(elem)
//                 .then((res) => resolve(res))
//                 .catch(err => {
//                     console.log('eeerrro');
//                 });
//         }, t);
//     });
//     // return await activeButton(elem);

// }

// start.addEventListener('click', async (e) => {
//     // console.log(playAll());
//     playAll()
//         .then((list) => {
//             console.log(list);
//         });
// });