const controller = new Controller();

document.getElementById("start").onclick = controller.startGame.bind(controller);

Object.values(controller.board._buttons).forEach(element => {
    element.onclick = controller.getInput.bind(controller);
});